import { useLoaderData } from "react-router";
import Link from "~/components/Link";
import globalMeta from "~/utils/global-meta";
import { getPosts } from "~/utils/post";

export const loader = async () => {
  return await getPosts(5);
};

export function meta() {
  return [
    ...globalMeta,
    { title: "Lucas Coelho" },
    {
      property: "og:title",
      content: "Lucas Coelho",
    },
    {
      property: "og:description",
      content: "Software Engineer interested in making developer tools.",
    },
    {
      name: "description",
      content: "Software Engineer interested in making developer tools.",
    },
  ];
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <main>
      <section className="main-section">
        <h1 className="main-name">Lucas Coelho</h1>
        <sub>
          Software Engineer @{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://timescale.com"
          >
            Timescale
          </a>
        </sub>

        <p>
          Interested in problem solving, strategy and puzzle games. Curious
          about game design, performance, tool creation and debugging.
        </p>
        <p>
          Created and maintained design systems, worked in Platform, Product and
          Marketing teams... while designing some{" "}
          <Link to="/games">
            <strong>games</strong>
          </Link>{" "}
          at home.
        </p>
      </section>
      <hr />
      <section>
        <p>
          I've been trying to <Link to="/blog">write more</Link>.
        </p>
        <h3>Socials</h3>
        <ul>
          <li>
            <Link to="mailto:contact@lucascoelho.dev">
              contact@lucascoelho.dev
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/coelhucas">
              github
            </Link>
          </li>
          <li>
            <Link to="https://mastodon.gamedev.place/@cuca">mastodon</Link>
          </li>
        </ul>
      </section>
      <nav className="index-posts">
        <ul>
          <h3>Blog posts</h3>
          {posts.map((post) => (
            <li key={post.title}>
              <span>
                <Link viewTransition to={`/blog/${post.slug}`}>
                  {post.date} - {post.title}
                </Link>
              </span>
            </li>
          ))}
          <li>
            <Link viewTransition to="/blog">
              More...
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
