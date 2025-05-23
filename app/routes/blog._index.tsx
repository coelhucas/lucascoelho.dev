import type { LinksFunction } from "react-router";
import { useLoaderData } from "react-router";

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

export const loader = async () => {
  return await getPosts();
};

function PostCard({ slug, title, date, readingTime }: Post) {
  const href = `/blog/${slug}`;
  return (
    <li className="list-item">
      <span>
        {date}
        {"  "}
        <Link to={href} viewTransition>
          {title}
        </Link>
      </span>
    </li>
  );
}

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <main>
      <div className="container">
        <h1 className="flex-1">Posts</h1>
        <ul className="list">
          {posts.map((post) => (
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
