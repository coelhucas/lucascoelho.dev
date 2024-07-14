import { useLoaderData } from "@remix-run/react";
import { IconNames } from "~/components/Icon";
import Link, { LinkProps } from "~/components/Link";
import Tag from "~/components/Tag";
import globalMeta from "~/utils/global-meta";

type NavigationLink = {
  title: string;
  path: string;
  anchor?: boolean;
  tags?: string[];
  icon?: IconNames;
};

export const loader = () => {
  return {
    projects: [
      {
        // Wip. Have a page for it?
        title: "MMORPG JAM: Mythic Quest",
        path: "https://cuca.itch.io/mmorpg-jam",
        tags: ["Typescript"],
      },
      {
        title: "Yoga",
        path: "https://github.com/gympass/yoga",
        tags: ["JavaScript"],
      },
      {
        title: "sph.lua",
        path: "https://github.com/coelhucas/simple-physics-handler",
        tags: ["Lua"],
      },
      {
        title: "mini-styled",
        path: "https://github.com/coelhucas/mini-styled",
        tags: ["JavaScript"],
      },
      {
        title: "Outline me",
        path: "https://github.com/coelhucas/outline-me",
        tags: ["JavaScript"],
      },
      {
        title: "King of Parties",
        path: "/kop",
        tags: ["GDScript"],
      },

      {
        title: "pixel",
        path: "https://github.com/coelhucas/pixel",
        tags: ["JavaScript"],
      },
      {
        title: "hitbox editor",
        path: "https://github.com/coelhucas/hitbox-editor/",
        tags: ["GDScript"],
      },
      {
        title: "RGBA map generator",
        path: "https://github.com/coelhucas/unity-rgba-level-generator",
        tags: ["C#"],
      },
      {
        title: "View more",
        path: "https://github.com/coelhucas",
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

const ProjectLink = ({ tags, ...props }: LinkProps & { tags?: string[] }) => {
  return (
    <span>
      <Link {...props} />{" "}
      {tags &&
        tags.map((t) => (
          <Tag key={t} text={t}>
            {" "}
            ∙{" "}
          </Tag>
        ))}
    </span>
  );
};

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
          <Link to="/games">
            <strong>games</strong>
          </Link>
          .
        </p>
        <hr />
      </section>
      <section className="projects-container">
        <h3>Projects</h3>
        <ul className="projects-list">
          {data.projects.map(({ title, path, anchor = true, tags, props }) => {
            const target = path.startsWith("https") ? "_blank" : undefined;

            return (
              <li key={title}>
                <ProjectLink tags={tags} to={path} target={target}>
                  {title}
                </ProjectLink>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
