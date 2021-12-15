import { Link, useLoaderData } from "remix";
import type { LoaderFunction, LinksFunction, MetaFunction } from "remix";
import { getPost } from "~/post";
import invariant from "tiny-invariant";

import stylesUrl from "~/styles/blog/shared.css";

export let meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.title} | Blog - lucascoelho.dev`,
    description: "Some random thoughts and stuff that I learn and share.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({
  params
}) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">all posts</Link>
    </nav>
    <h1>{post.title}</h1>
    <p className="post-date">Published in {post.date}</p>
    <div className="test" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}
