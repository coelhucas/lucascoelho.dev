import { useLoaderData, useLocation } from "@remix-run/react";
import blogStyles from "../styles/blog/styles.module.css";

import type { SerializedPost } from "~/utils/post";
import { getPost } from "~/utils/post";

import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useEffect, useRef } from "react";
import type { Theme } from "remix-themes";
import { useTheme } from "remix-themes";
import globalMeta from "~/utils/global-meta";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const post = data?.post;

  return [
    ...globalMeta,
    {
      title: post?.title
        ? `${post.title} | Blog | Lucas Coelho`
        : "Blog | Lucas Coelho",
    },
    {
      property: "og:title",
      content: post?.title
        ? `${post.title} | Blog | Lucas Coelho`
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params?.slug) {
    throw new Error("No slug provided");
  }

  try {
    const post = await getPost(params.slug);
    return json({ post, pageUrl: process.env.WEBSITE_URL });
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
  url,
}: {
  slug: string;
  theme: Theme | null;
  url: string;
}) => {
  const location = useLocation();
  const canonicalUrl = url + location.pathname;

  const scriptParent = useRef<HTMLDivElement>(null);
  // GAMBETA DO MAL
  const script = `<script>
  /**
  *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
  *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
  var disqus_config = function () {
  this.page.url = "${canonicalUrl}";  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = "${slug}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  // Gambeta sinistra
  // https://ourcodeworld.com/articles/read/1606/how-to-reset-disqus-color-schema-automatically
  (function() {
  document.addEventListener('colorSchemeChanged', function (e) {
  setTimeout(() => {
      if (document.readyState == 'complete') {
        DISQUS.reset({ reload: true, config: disqus_config });
      }
    }, 0)
  })
  })();

  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://lucascoelho.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>`;

  useEffect(() => {
    const range = document.createRange();
    const documentFragment = range.createContextualFragment(script);
    scriptParent.current?.append(documentFragment);
  }, []);

  return (
    <div ref={scriptParent} className={blogStyles.comments}>
      <div id="disqus_thread"></div>

      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
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
        {post.date} ∙ {post.readingTime} minute read
      </p>
      <br />

      <article dangerouslySetInnerHTML={{ __html: post.html }} />
      <CommentsSection theme={theme} slug={post.slug} url={pageUrl} />
    </main>
  );
}
