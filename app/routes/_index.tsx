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

export default function Index() {
  // const data = useLoaderData<typeof loader>();

  return (
    <main>
      <section className="main-section">
        <h1 className="main__name">Lucas Coelho</h1>
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
    </main>
  );
}
