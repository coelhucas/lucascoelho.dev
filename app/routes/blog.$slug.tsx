import {
  Response,
  type LinksFunction,
  type LoaderArgs,
  type V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { Theme } from "remix-themes";
import { useTheme } from "remix-themes";
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

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export const loader = async ({ params, context }: LoaderArgs) => {
  if (!params?.slug) {
    throw new Error("No slug provided");
  }

  try {
    const post = await getPost(params.slug);
    return { post, pageUrl: process.env.WEBSITE_URL };
  } catch (err) {
    // Something went wrong, likely the post don't exist. I'll assume that.
    throw new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }
};

const CommentsSection = ({
  slug,
  theme,
  url,
}: {
  slug: string;
  theme: Theme | null;
  url: string;
}) => {
  const location = useLocation();
  const canonicalUrl = url + location.pathname;

  if (!theme) return null;

  // const commentSection = useUtterances(
  //   {
  //     src: "https://utteranc.es/client.js",
  //     crossorigin: "anonymous",
  //     repo: "coelhucas/blog",
  //     theme: `github-${theme}`,
  //     id: "bazinga",
  //     async: "true",
  //     "issue-term": slug,
  //   },
  //   React.createRef(),
  // );
  return (
    <span style={{}}>
      <div id="disqus_thread">
        <p>Texto de teste pro tema</p>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
  /**
  *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
  *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
  var disqus_config = function () {
  this.page.url = "${canonicalUrl}";  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = "${slug}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  alert('watafok');
  // Gambeta sinistra
  // https://ourcodeworld.com/articles/read/1606/how-to-reset-disqus-color-schema-automatically
  (function() {
    document.addEventListener('colorSchemeChanged', function (e) {
      setTimeout(() => {
          if (document.readyState == 'complete') {
            DISQUS.reset({ reload: true, config: disqus_config });
            console.log({ DISQUS })
          }
        }, 0)
    })
  })();

  function loadDisqus() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://lucascoelho.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  };

  document.addEventListener('DOMContentLoaded', () => { loadDisqus(); });
  `,
        }}
      />
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </span>
  );
};

export default function BlogPost() {
  const { post, pageUrl } = useLoaderData<{
    post: SerializedPost;
    pageUrl: string;
  }>();

  const [theme] = useTheme();

  return (
    <main className="blog-page-container">
      <h1>{post.title}</h1>
      <p className="blog-post-date">
        Published in {post.date} ({post.readingTime} minute read)
      </p>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      <CommentsSection theme={theme} slug={post.slug} url={pageUrl} />
    </main>
  );
}
