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
        title: "yoga",
        path: "https://github.com/gympass/yoga",
        tags: ["JS", "React Native", "React.JS"],
      },
      {
        title: "aabb physics library",
        path: "https://github.com/coelhucas/simple-physics-handler",
        tags: ["lua"]
      },
      {
        title: "mini-styled",
        path: "https://github.com/coelhucas/mini-styled",
        tags: ["JS"],
      },
      {
        title: "outline me",
        path: "https://github.com/coelhucas/outline-me",
        tags: ["JS"],
      },
      {
        title: "king of parties",
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
        tags: ["GDScript"],
      },
      {
        title: "color based map generator",
        path: "https://github.com/coelhucas/unity-rgba-level-generator",
        tags: ["C#"],
      },
    ],
  };
};

export function meta() {
  return [...globalMeta, { title: "Lucas Coelho" }, { description: "Software Engineer interested in making development tools." }];
}

export default function Index() {
  const data = useLoaderData() as RootLoaderReturn;
  return (
    <main>
      <section className="main-section">
        <h1>Lucas Coelho</h1>

        <h2>Software Engineer</h2>
        <p>
          Interested in making development tools, games, and learning more about performance & debugging. 
          {/* <Link anchor highlight weight="bold" to="https://softwool.co">
            Softwool
          </Link> */}
          <br />
          <br />
          Worked on some design systems and front-end focused "platform teams". Founded a now in hiatus game development studio, <Link anchor highlight weight="bold" to="https://softwool.co">Softwool</Link>.
          {" "}Also have published some simple toy game projects on{" "}
          <Link anchor highlight to="https://cuca.itch.io/">
          itch.io</Link>, <Link anchor highlight to="https://gamejolt.com/@cucadev">gamejolt/@cucadev</Link>.
        </p>
        <hr />
      </section>
      <section className="projects-container">
        <Link weight="bold" omitUnderline highlight anchor to="https://github.com/coelhucas">
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
