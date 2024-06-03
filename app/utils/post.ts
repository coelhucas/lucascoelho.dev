/* eslint-disable @typescript-eslint/no-unused-vars */
import parseFrontMatter from "front-matter";
import fs from "fs/promises";
import hljs from "highlight.js";
import { marked, Renderer, type TokenizerAndRendererExtension } from "marked";
import markedFootnote from "marked-footnote";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: number;
};

export type SerializedPost = Post & {
  html: string;
};

type PostMarkdownAttributes = {
  title: string;
  date: string;
};

const postsPath = process.env.NETLIFY
  ? path.join(__dirname, "../../../..", "posts")
  : path.join(process.cwd(), "posts");

const renderer = new Renderer();
const footnoteMatch = /^\[\^([^\]]+)\]:([\s\S]*)$/;
const referenceMatch = /\[\^([^\]]+)\](?!\()/g;
const referencePrefix = "footnote-ref";
const footnotePrefix = "footnote";

const footnoteTemplate = (ref: string, text: string) => {
  return `<p class="footnote"><sup id="${footnotePrefix}:${ref}"><a class="anchor" href="#${referencePrefix}:${ref}">${ref}</a></sup>${text} <a class="anchor" href="#${referencePrefix}:${ref}">⏎</a></p>`;
};

const referenceTemplate = (ref: string) => {
  return `<sup id="${referencePrefix}:${ref}"><a class="anchor" href="#${footnotePrefix}:${ref}">${ref}</a></sup>`;
};

const interpolateReferences = (text: string) => {
  return text.replace(referenceMatch, (_, ref) => {
    return referenceTemplate(ref);
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const interpolateFootnotes = (text: string) => {
  return text.replace(footnoteMatch, (_, value, text) => {
    return footnoteTemplate(value, text);
  });
};

renderer.blockquote = (text: string) => {
  return `<blockquote class="quote">${text}</blockquote>`;
};

// renderer.paragraph = (text: string) => {
//   return marked.Renderer.prototype.paragraph.apply(renderer, [
//     interpolateReferences(interpolateFootnotes(text)),
//   ]);
// };

// renderer.text = (text: string) => {
//   return marked.Renderer.prototype.text.apply(renderer, [
//     interpolateReferences(interpolateFootnotes(text)),
//   ]);
// };

renderer.heading = (text: string, level: number) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

  return `
    <h${level}>
      <a name="${escapedText}" class="anchor anchor--no-decoration" href="#${escapedText}">
        <span class="header-link">#</span>
      </a>
      ${text}
    </h${level}>`;
};

renderer.link = (href: string, _: string, text: string) =>
  `<a class="anchor" href="${href}">${text}</a>`;

// renderer.image = (href: string, _, text: string) => {
//   return `<div><img class="post-image" src="${href}" alt="${text}" type="image/webp">rirriri</img></div>`;
// };

renderer.image = (href: string, title: string, text: string) => {
  return `<img src="${href}" class="post-image" alt="${text}" title="${title ?? text}"></img>`;
};

const highlight = (code: string, lang: string) => {
  const language = hljs.getLanguage(lang) ? lang : "plaintext";
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

const options = { renderer, langPrefix: "hljs language-", highlight };

function getReadingTime(body: string): number {
  const wpm = 200;
  const words = body.trim().split(/\s+/g).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export async function getPosts(): Promise<Post[]> {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename), {
        encoding: "utf8",
      });
      const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
        file.toString(),
      );

      const readingTime = getReadingTime(body);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        /** e.g.: Jun 24, 2022 */
        date: new Date(attributes.date).toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        readingTime,
      };
    }),
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath, {
    encoding: "utf8",
  });
  const { attributes, body } = parseFrontMatter<PostMarkdownAttributes>(
    file.toString(),
  );

  const readingTime = getReadingTime(body);
  marked.use(markedFootnote());
  marked.use({ renderer, gfm: true, extensions: [lcpImageEmbed] });
  const html = await marked.parse(body, options);
  return {
    slug,
    title: attributes.title,
    date: attributes.date,
    html,
    readingTime,
  };
}
