import parseFrontMatter from "front-matter";
import fs from "fs/promises";
import { marked, Renderer, type TokenizerAndRendererExtension } from "marked";
import markedFootnote from "marked-footnote";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: number;
  lastUpdate?: string;
};

export type SerializedPost = Post & {
  html: string;
};

type PostMarkdownAttributes = {
  title: string;
  date: string;
  update?: string;
};

const postsPath = process.env.NETLIFY
  ? path.join(__dirname, "../../..", "posts")
  : // @ts-expect-error - it thinks we're on browser, but this runs on node
    path.join(process.cwd(), "app", "posts");

const renderer = new Renderer();
const referencePrefix = "footnote-ref";
const footnotePrefix = "footnote";

renderer.blockquote = (text: string) => {
  return `<blockquote class="quote">${text}</blockquote>`;
};

renderer.heading = (text: string, level: number) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

  return `
    <h${level} id=${escapedText}>
      <a name="${escapedText}" class="anchor-heading" href="#${escapedText}">
        ${text}
      </a>
    </h${level}>`;
};

renderer.link = (href: string, _: string, text: string) => {
  const target =
    href.startsWith("/") || href.startsWith("#") ? "" : 'target="_blank"';
  return `<a class="anchor" href="${href}" ${target}>${text}</a>`;
};

renderer.image = (href: string, title: string, text: string) => {
  return `<img src="${href}" class="post-image" alt="${text}" title="${
    title ?? text
  }"></img>`;
};

const highlight = function (code: string, lang: string) {
  const hljs = require("highlight.js");
  const language = hljs.getLanguage(lang) ? lang : "plaintext";

  hljs.registerLanguage(
    "javascript",
    require("highlight.js/lib/languages/javascript")
  );

  return hljs.highlight(code, { language }).value;
};

const lcpImage = (src: string) => {
  return `<div>
    <link rel="preload" fetchPriority="high" as="image" href="${src}" type="image/webp"></link>
    <img src="${src}" fetchPriority="high" loading="eager" class="post-image" type="image/webp" ></img>
  </div>`;
};

const lcpImageEmbed: TokenizerAndRendererExtension = {
  name: "lcp",
  level: "block", // Is this a block-level or inline-level tokenizer?
  start(src) {
    return src.match(/^@\[/)?.index;
  }, // Hint to Marked.js to stop and check for a match
  tokenizer(src, _tokens) {
    const rule = /^@\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/; // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    if (match) {
      return {
        type: "lcp",
        raw: match[0],
        src: match[1].trim(),
      };
    }
  },
  renderer(token) {
    return lcpImage(token.src);
  },
};

const options = { renderer, highlight, langPrefix: "hljs language-" };

function getReadingTime(body: string): number {
  const wpm = 200;
  const words = body.trim().split(/\s+/g).length;
  const time = Math.ceil(words / wpm);
  return time;
}

const sortByDate = (a: Post, b: Post) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateA === dateB ? 0 : dateA > dateB ? -1 : 1;
};

export async function getPosts(limit?: number): Promise<Post[]> {
  const dir = await fs.readdir(postsPath);

  const result = await Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename), {
        encoding: "utf8",
      });
      const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
        file.toString()
      );

      const readingTime = getReadingTime(body);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        /** e.g.: Jun 24, 2022 */
        date: new Date(attributes.date).toISOString().split("T")[0],
        lastUpdate: attributes?.update
          ? new Date(attributes.update).toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : undefined,

        readingTime,
      };
    })
  );

  const displayedPosts = limit
    ? result.sort(sortByDate).slice(0, limit)
    : result.sort(sortByDate);

  return displayedPosts;
}

// tarnished, cursed, never talk about that
const extractCoverImage = (html: string) => {
  const parts = html.split("<img");

  if (parts.length < 2) {
    return null;
  }

  const [, secondPart] = parts;
  const srcRegex = /src=["']([^"']+)["']/;
  const match = secondPart.match(srcRegex);

  // Return the captured group (content inside quotes) or null if not found
  return match ? match[1] : null;
};

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath, {
    encoding: "utf8",
  });
  const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
    file.toString()
  );

  const readingTime = getReadingTime(body);
  marked.use(markedFootnote());
  marked.use({ renderer, gfm: true, extensions: [lcpImageEmbed] });
  const html = await marked.parse(body, options);

  const coverImage = extractCoverImage(html);

  return {
    slug,
    title: attributes.title,
    coverImage,
    /** e.g.: Jun 24, 2022 */
    date: new Date(attributes.date).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    html,
    lastUpdate: attributes?.update
      ? new Date(attributes.update).toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : undefined,
    readingTime,
  };
}
