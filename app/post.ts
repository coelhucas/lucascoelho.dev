import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked, Renderer } from "marked";
import hljs from 'highlight.js';

export type Post = {
  slug: string;
  title: string;
  date: string;
};

export type PostMarkdownAttributes = {
  title: string;
  date: string;
};

const postsPath =
  path.join(process.cwd(), 'posts');

const renderer = new Renderer();
renderer.heading = (text: string, level: number) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return `
          <h${level}>
            <a name="${escapedText}" class="anchor anchor--no-decoration" href="#${escapedText}">
              <span class="header-link">#</span>
            </a>
            ${text}
          </h${level}>`;

};

renderer.link = (href: string, _: string, text: string) => `<a class="anchor" href=${href}>${text}</a>`;

renderer.image = (href: string, _, text: string) => {
  return `<img class="post-image" src=${href} alt=${text} />`;
}

const highlight = (code: string, lang: string) => {
  const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  return hljs.highlight(code, { language }).value;
}

const options = { renderer, langPrefix: 'hljs language-', highlight };

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(
        path.join(postsPath, filename)
      );
      const { attributes } = parseFrontMatter(
        file.toString()
      );
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        date: attributes.date,
      };
    })
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );

  marked.use({ renderer });
  const html = marked.parse(body, options);
  return { slug, title: attributes.title, date: attributes.date, html };
}

