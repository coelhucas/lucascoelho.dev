// import {
//     Response, type LinksFunction,
//     type LoaderArgs, type V2_MetaFunction
// } from "@remix-run/node";
import React, { useEffect } from "react";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import globalStylesUrl from "~/styles/global.css";
import globalMeta from "~/utils/global-meta";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params?.slug) {
    throw new Error("No slug provided");
  }

  try {
    const post = await getPost(params.slug);
    return json(post);
  } catch (err) {
    // Something went wrong, likely the post don't exist. I'll assume that.
    throw new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
};

export const meta: MetaFunction<typeof loader> = (r) => {
  return [
    ...globalMeta,
    {
      title: r.data?.title
        ? `${r.data.title} | Blog | Lucas Coelho`
        : "Blog | Lucas Coelho",
    },
    {
      property: "og:title",
      content: r.data?.title
        ? `${r.data.title} | Blog | Lucas Coelho`
        : "Blog | Lucas Coelho",
    },
    {
      property: "og:description",
      content: "Some random thoughts and stuff that I learn and share.",
    },
    {
      name: "description",
      content: "Some random thoughts and stuff that I learn and share.",
    },
  ];
};

function useUtterances(
  attributes: Record<string, string>,
  ref: React.RefObject<HTMLDivElement>,
) {
  const [theme] = useTheme();

  useEffect(() => {
    const scriptElement = document.createElement("script");

    for (const [key, value] of Object.entries(attributes)) {
      scriptElement.setAttribute(key, value);
    }

    if (ref?.current) {
      ref.current.appendChild(scriptElement);
    }
  }, []);

  useEffect(() => {
    const frame = document.querySelector(
      ".utterances-frame",
    ) as HTMLIFrameElement;
    if (frame && theme) {
      const commentsTheme =
        theme === Theme.DARK ? "github-dark" : "github-light";
      const message = {
        type: "set-theme",
        theme: commentsTheme,
      };

      frame.contentWindow?.postMessage(message, "https://utteranc.es");
    }
  }, [theme]);

  return ref;
}

const CommentsSection = ({ slug, theme }: { slug: string; theme: string }) => {
  const commentSection = useUtterances(
    {
      src: "https://utteranc.es/client.js",
      crossorigin: "anonymous",
      repo: "coelhucas/blog",
      theme: `github-${theme}`,
      id: "bazinga",
      async: "true",
      "issue-term": slug,
    },
    React.createRef(),
  );
  return (
    <div className="blog-comments">
      <div ref={commentSection}></div>
    </div>
  );
};

export default function PostSlug() {
  const post = useLoaderData<SerializedPost>();
  const [theme] = useTheme();

  return (
    <main className="blog-page-container">
      <h1>{post.title}</h1>
      <p className="blog-post-date">
        Published in {post.date} ({post.readingTime} minute read)
      </p>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      {theme && <CommentsSection theme={theme} slug={post.slug} />}
    </main>
  );
}
