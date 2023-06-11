import type {
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

import stylesUrl from "~/styles/blog/shared.css";
import globalStylesUrl from "~/styles/global.css";
import { useTheme } from "~/misc/ThemeProvider";
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
    { rel: "stylesheet", href: stylesUrl },
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

  const [isFrameLoaded, setIsFrameLoaded] = useState(false)
  const [shouldUpdateTheme, setShouldUpdateTheme] = useState(false)
  const [currentAttempt, setCurrentAttempt] = useState(1)
  const { theme, isLoading } = useTheme()

  const triggerIFrameListening = () => {
    setIsFrameLoaded(true)
  }

  const triggerCommentsThemeUpdate = () => {
    setShouldUpdateTheme(true)
  }

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.addEventListener("load", triggerCommentsThemeUpdate)

    for (const [key, value] of Object.entries(attributes)) {
      scriptElement.setAttribute(key, value);
    }

    if (ref?.current) {
      ref.current.appendChild(scriptElement);
    } else {
      throw new Error("welp");
    }

    return() => scriptElement.removeEventListener("load", triggerCommentsThemeUpdate)

  }, []);

  useEffect(() => {
    if (!isFrameLoaded) return
    const frame = document.querySelector(".utterances-frame") as HTMLIFrameElement
    frame.contentWindow?.addEventListener("load", triggerCommentsThemeUpdate)

    return () => frame.contentWindow?.removeEventListener("load", triggerIFrameListening)
    

  }, [isFrameLoaded, isLoading])

  useEffect(() => {
    if (!shouldUpdateTheme) return

    const frame = document.querySelector(".utterances-frame") as HTMLIFrameElement
    if (frame && theme) {
      const commentsTheme = theme === 'dark' ? 'github-dark' : 'github-light'
      const message = {
        type: 'set-theme',
        theme: commentsTheme
      };

      // This is some heavy gambiarra to wait for next event loop tick
      // and hope for the message to be sent
      const interval = setInterval(() => {
        try {
          frame.contentWindow?.postMessage(message, 'https://utteranc.es')
          setShouldUpdateTheme(false)
        } catch(_) {
          console.warn(`Trying to post message again in 100ms...`)
          setCurrentAttempt(c => c + 1)
        } finally {
          if (currentAttempt > 3) {
            // lets just give up at this point lol
            clearInterval(interval)
          }
        }
      }, 10);

      return () => clearInterval(interval)
    }
  }, [theme, isLoading, shouldUpdateTheme])

  return ref;
}

const CommentsSection = ({ slug }: { slug: string}) => {
  const commentSection = useUtterances(
    {
      src: "https://utteranc.es/client.js",
      crossorigin: "anonymous",
      repo: "coelhucas/blog",
      theme: "preferred-color-scheme",
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
      {theme && <CommentsSection slug={post.slug} />}
    </main>
  );
}
