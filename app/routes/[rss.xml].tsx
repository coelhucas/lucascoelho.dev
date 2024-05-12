import { LoaderFunction } from "@remix-run/node";
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
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${link}</link>
    <language>en-us</language>
    <ttl>60</ttl>
    <atom:link href="https://lucascoelho.dev/rss.xml" rel="self" type="application/rss+xml" />
    ${entries
      .map(
        (entry) => `
      <item>
        <title><![CDATA[${entry.title}]]></title>
        <pubDate>${entry.pubDate}</pubDate>
        <link>${entry.link}</link>
        <content type="html" xml:base="${entry.link}">${entry.content}</content>
        ${entry.guid ? `<guid isPermaLink="false">${entry.guid}</guid>` : ""}
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
    title: "Lucas Coelho's Blog",
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
