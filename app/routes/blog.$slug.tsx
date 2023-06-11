import type {
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect } from "react";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

import stylesUrl from "~/styles/blog/shared.css";
import globalStylesUrl from "~/styles/global.css";
import { useTheme } from "~/misc/ThemeProvider";

export const meta: V2_MetaFunction = (r) => {
  return [
    {
      title: r.data?.title
      ? `${r.data.title} | Blog | Lucas Coelho`
      : "Blog | Lucas Coelho",
    },
    { description: "Some random thoughts and stuff that I learn and share." },
  ];
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: stylesUrl },
  ];
};

export const loader = async ({ params }: LoaderArgs) => {
  console.log("called");
  if (!params?.slug) {
    throw new Error("No slug provided");
  }

  const post = await getPost(params.slug);

  console.log("post got");

  return post;
};

function useUtterances(
  attributes: Record<string, string>,
  ref: React.RefObject<HTMLDivElement>
) {

  const { theme } = useTheme()

  useEffect(() => {
    const scriptElement = document.createElement("script");

    for (const [key, value] of Object.entries(attributes)) {
      scriptElement.setAttribute(key, value);
    }

    if (ref?.current) {
      ref.current.appendChild(scriptElement);
    } else {
      throw new Error("welp");
    }

  }, []);

  useEffect(() => {
    const frame = document.querySelector(".utterances-frame") as HTMLIFrameElement
    console.log(frame)

    if (frame && !!theme) {
      const commentsTheme = theme === 'dark' ? 'github-dark' : 'github-light'
      const message = {
        type: 'set-theme',
        theme: commentsTheme
      };

      frame.contentWindow?.postMessage(message, 'https://utteranc.es');
    }
  }, [theme])

  return ref;
}

export default function PostSlug() {
  const post = useLoaderData<SerializedPost>();
  const commentSection = useUtterances(
    {
      src: "https://utteranc.es/client.js",
      crossorigin: "anonymous",
      repo: "coelhucas/blog",
      theme: "preferred-color-scheme",
      id: "bazinga",
      async: "true",
      "issue-term": post.slug,
    },
    React.createRef()
  );

  return (
    <main className="blog-page-container">
      <h1>{post.title}</h1>
      <p className="blog-post-date">
        Published in {post.date} ({post.readingTime} minute read)
      </p>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="blog-comments">
        <div ref={commentSection}></div>
      </div>
    </main>
  );
}
