import type { LinksFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Icon from "~/components/Icon";
import Link from "~/components/Link";
import stylesUrl from "~/styles/blog.css?url";
import globalMeta from "~/utils/global-meta";
import type { Post } from "~/utils/post";
import { getPosts } from "~/utils/post";

export const meta = () => {
  return [
    ...globalMeta,
    { title: "Blog | Lucas Coelho" },
    {
      property: "og:title",
      content: "Blog | Lucas Coelho",
    },
    {
      name: "description",
      content: "Some random thoughts and stuff that I learn and share.",
    },
    {
      property: "og:description",
      content: "Some random thoughts and stuff that I learn and share.",
    },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader = () => {
  return getPosts();
};

function PostCard({ slug, title, date, readingTime }: Post) {
  return (
    <li className="list-item">
      <Link to={slug} target="_top" className="post-card">
        {/* <div className="post-card"> */}
        <p>{title}</p>
        <span className="date">
          {date} <br />
          {readingTime} min read
        </span>
        {/* </div> */}
      </Link>
    </li>
  );
}

const sortByDate = (a: Post, b: Post) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateA === dateB ? 0 : dateA > dateB ? -1 : 1;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <main>
      <div className="container">
        <h1 className="flex-1">Posts</h1>
        <Link className="icon__anchor" target="_blank" to="/rss.xml">
          <Icon as="rss" /> RSS
        </Link>
        <ul className="list">
          {posts.sort(sortByDate).map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              readingTime={post.readingTime}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
