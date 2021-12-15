import { Link, useLoaderData } from "remix";
import type { LinksFunction, MetaFunction } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import sharedStylesUrl from "~/styles/blog/shared.css";
import stylesUrl from "~/styles/blog/posts-list.css";

export let meta: MetaFunction = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: sharedStylesUrl }, { rel: 'stylesheet', href: stylesUrl}];
};

export const loader = () => {
  return getPosts();
};

type PostCardProps = {
  slug: string;
  title: string;
}

function PostCard ({ slug, title }: PostCardProps) {
  return <Link className="post-card" to={slug}>{title}</Link>;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Posts</h1>
      <ul className="list">
        {[...posts].sort((a, b) => a.date > b.date ? -1 : 1).map(post => (
          <li className="list-item" key={post.slug}>
            <PostCard slug={post.slug} title={post.title} />
            {/* <Link to={post.slug}>{post.title}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
