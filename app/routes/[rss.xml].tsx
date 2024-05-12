import type { LoaderFunction } from "@remix-run/node";
import sanitizeHtml from "sanitize-html";
import { getPost, getPosts } from "~/utils/post";

export type RssEntry = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  author?: string;
  guid?: string;
};

export function generateRss({
  description,
  entries,
  link,
  title,
}: {
  title: string;
  description: string;
  link: string;
  entries: RssEntry[];
}): string {
  return `<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${link}</link>
    ${entries
      .map(
        (entry) => `
      <item>
        <title><![CDATA[${entry.title}]]></title>
        <link>${entry.link}</link>
        ${entry.guid ? `<guid isPermaLink="true">${entry.guid}</guid>` : ""}
        <pubDate>${entry.pubDate}</pubDate>
        <content:encoded><![CDATA[${entry.content}]]></content:encoded>
      </item>`,
      )
      .join("")}
  </channel>
</rss>`;
}

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  const entries = await Promise.all(
    posts.map(async (post) => {
      const { html } = await getPost(post.slug);
      return {
        pubDate: new Date(post.date).toUTCString(),
        title: post.title,
        link: `https://lucascoelho.dev/blog/${post.slug}`,
        guid: `https://lucascoelho.dev/blog/${post.slug}`,
        content: sanitizeHtml(html),
      };
    }),
  );

  const feed = generateRss({
    title: "Lucas Coelho",
    description:
      "Where I share some thoughts about software and other personal interests",
    link: "https://lucascoelho.dev/blog",
    entries,
  });

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=2419200",
    },
  });
};
