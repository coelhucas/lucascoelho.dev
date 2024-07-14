import { useLoaderData } from "@remix-run/react";
import { IconNames } from "~/components/Icon";
import Link, { ReusedLinkProps } from "~/components/Link";
import globalMeta from "~/utils/global-meta";

type NavigationLink = {
  title: string;
  path: string;
  anchor?: boolean;
  tags?: string[];
  icon?: IconNames;
  props?: ReusedLinkProps;
};

export const loader = () => {
  return {
    projects: [
      {
        // Wip. Have a page for it?
        title: "Mythic Quest (MMORPG JAM)",
        path: "https://cuca.itch.io/mmorpg-jam",
        tags: ["TS", "Node", "socket.io"],
      },
      {
        title: "Yoga",
        path: "https://github.com/gympass/yoga",
        tags: ["JS", "React Native", "React.JS", "design system"],
      },
      {
        title: "sph.lua",
        path: "https://github.com/coelhucas/simple-physics-handler",
        tags: ["lua", "gamedev"],
      },
      {
        title: "mini-styled",
        path: "https://github.com/coelhucas/mini-styled",
        tags: ["JS", "library"],
      },
      {
        title: "Outline me",
        path: "https://github.com/coelhucas/outline-me",
        tags: ["JS", "browser extension"],
      },
      {
        title: "King of Parties",
        path: "/kop",
        anchor: false,
        tags: ["GDScript"],
      },

      {
        title: "pixel",
        path: "https://github.com/coelhucas/pixel",
        tags: ["JS"],
      },
      {
        title: "hitbox editor",
        path: "https://github.com/coelhucas/hitbox-editor/",
        tags: ["GDScript", "tool"],
      },
      {
        title: "RGBA map generator",
        path: "https://github.com/coelhucas/unity-rgba-level-generator",
        tags: ["C#", "tool"],
      },
      {
        title: "View more",
        path: "https://github.com/coelhucas",
        tags: ["github"],
      },
    ] as NavigationLink[],
  };
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
  const data = useLoaderData<typeof loader>();

  return (
    <main>
      <section className="main-section">
        <h1>Lucas Coelho</h1>

        <h2>
          Software Engineer at{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://timescale.com"
          >
            Timescale
          </a>
        </h2>
        <p>
          Interested in making <code>/(developer)?\s+(tools)/</code>, games, and
          messing with performance, debugging & observability.
          <br />
          <br />
          Created (and maintained) design systems, libraries, worked in
          Platform, Product and Marketing teams, and designed some{" "}
          <Link highlight weight="bold" to="/games">
            games
          </Link>
          .
        </p>
        <hr />
      </section>
      <section className="projects-container">
        <h3>Projects</h3>
        <ul className="projects-list">
          {data.projects.map(({ title, path, anchor = true, tags, props }) => (
            <li key={title}>
              <Link highlight anchor={anchor} to={path} tags={tags} {...props}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
