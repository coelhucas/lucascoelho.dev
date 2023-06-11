import type {
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect } from "react";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

import { useTheme } from "~/misc/ThemeProvider";
import globalStylesUrl from "~/styles/global.css";
import globalMeta from "~/utils/global-meta";

export const meta: V2_MetaFunction = (r) => {
  return [
    ...globalMeta,
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
  ];
};

export const loader = async ({ params }: LoaderArgs) => {
  if (!params?.slug) {
    throw new Error("No slug provided");
  }

  const post = await getPost(params.slug);

  return post;
};

function useUtterances(
  attributes: Record<string, string>,
  ref: React.RefObject<HTMLDivElement>
) {

  const { theme, isLoading } = useTheme()

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
    if (frame && theme) {
      const commentsTheme = theme === 'dark' ? 'github-dark' : 'github-light'
      const message = {
        type: 'set-theme',
        theme: commentsTheme
      };

      frame.contentWindow?.postMessage(message, 'https://utteranc.es')
    }
  }, [theme, isLoading])

  return ref;
}

const CommentsSection = ({ slug, theme }: { slug: string, theme: string}) => {
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
    React.createRef()
  );
return (
  <div className="blog-comments">
    <div ref={commentSection}></div>
  </div>
)
}

export default function PostSlug() {
  const post = useLoaderData<SerializedPost>();
  const { theme } = useTheme()
  

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
