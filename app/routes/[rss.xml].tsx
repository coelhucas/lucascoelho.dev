import type { LoaderFunction } from "@remix-run/node";
import { getPost, getPosts } from "~/utils/post";

export type RssEntry = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  author?: string;
  lastBuildDate?: string;
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
        ${entry?.lastBuildDate ? `<lastBuildDate>${entry.lastBuildDate}</lastBuildDate>` : ""}
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
        lastBuildDate: post?.lastUpdate
          ? new Date(post.date).toUTCString()
          : undefined,
        title: post.title,
        link: `https://lucascoelho.dev/blog/${post.slug}`,
        guid: `https://lucascoelho.dev/blog/${post.slug}`,
        content: html,
      };
    }),
  );

  const sortByDate = (a: RssEntry, b: RssEntry) => {
    const dateA = new Date(a.pubDate);
    const dateB = new Date(b.pubDate);

    return dateA === dateB ? 0 : dateA > dateB ? -1 : 1;
  };

  const feed = generateRss({
    title: "Lucas Coelho",
    description:
      "Where I share some thoughts about software and other personal interests",
    link: "https://lucascoelho.dev/blog",
    entries: entries.sort(sortByDate),
  });

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=2419200",
    },
  });
};
