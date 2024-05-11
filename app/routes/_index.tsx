import { useLoaderData } from "react-router";
import Link from "~/components/Link";

import type { IconNames } from "~/components/Icon";
import type { ReusedLinkProps } from "~/components/Link";
import globalMeta from "~/utils/global-meta";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

type NavigationLink = {
  title: string;
  path: string;
  anchor?: boolean;
  tags?: string[];
  icon?: IconNames;
  props?: ReusedLinkProps;
};

type RootLoaderReturn = {
  projects: NavigationLink[];
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
    ],
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
  const data = useLoaderData() as RootLoaderReturn;
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
          Created (and maintained) design systems, internal libraries, member of
          Platform teams and designer of{" "}
          <Link
            anchor
            highlight
            weight="bold"
            to="https://store.steampowered.com/developer/Softwool"
          >
            games
          </Link>
          .
        </p>
        <hr />
      </section>
      <section className="projects-container">
        <Link
          weight="bold"
          omitUnderline
          highlight
          anchor
          to="https://github.com/coelhucas"
        >
          Projects
        </Link>
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
