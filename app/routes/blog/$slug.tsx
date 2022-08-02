import React, { useEffect } from "react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import { useLoaderData } from "remix";
import invariant from "tiny-invariant";
import Link from "~/components/Link";
import { getPost } from "~/post";

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

function useUtterances(attributes: Record<string, string>, ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const scriptElement = document.createElement("script");
    for (const [key, value] of Object.entries(attributes)) {
      scriptElement.setAttribute(key, value);
    }
    if (ref?.current) {
      ref.current.appendChild(scriptElement);
    } else {
      throw new Error("Lol?");
    }
  }, []);

  return ref;
}

export default function PostSlug() {
  const post = useLoaderData();
  const commentSection = useUtterances({
    src: "https://utteranc.es/client.js",
    crossorigin: "anonymous",
    repo: "coelhucas/blog",
    theme: "github-light",
    async: "true",
    "issue-term": post.slug,
  }, React.createRef());
  return (
    <>
      <h1>{post.title}</h1>
      <p className="post-date">Published in {post.date} ({post.readingTime} minute read)</p>
      <article className="post-container" dangerouslySetInnerHTML={{ __html: post.html }} />
      <div style={{ width: '100%' }}>
        <div ref={commentSection}></div>
      </div>
    </>
  );
}
