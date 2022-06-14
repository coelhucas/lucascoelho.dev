import type { LinksFunction, MetaFunction } from "remix";
import { useLoaderData } from "remix";
import Link from '~/components/Link';
import type { Post } from "~/post";
import { getPosts } from "~/post";
import stylesUrl from "~/styles/blog/posts-list.css";
import sharedStylesUrl from "~/styles/blog/shared.css";

export let meta: MetaFunction = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: sharedStylesUrl }, { rel: 'stylesheet', href: stylesUrl }];
};

export const loader = () => {
  return getPosts();
};

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
}

function PostCard({ slug, title, date }: PostCardProps) {
  return (
    <Link omitUnderline to={slug}>
      <div className="post-card">
        {title}
        <span className="date">{date}</span>
      </div>
    </Link>
  );
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
            <PostCard
              slug={post.slug}
              title={post.title}
              date={post.date}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
