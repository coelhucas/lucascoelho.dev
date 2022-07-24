import type { LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";
import type { IconNames } from "~/components/Icon";
import Icon from "~/components/Icon";
import type { ReusedLinkProps } from "~/components/Link";
import Link from "~/components/Link";

type NavigationLink = {
  title: string;
  path: string;
  anchor?: boolean;
  tags?: string[];
  icon?: IconNames;
  props?: ReusedLinkProps;
}

type IndexData = {
  navLinks: NavigationLink[];
  projects: NavigationLink[];
};

export let loader: LoaderFunction = () => {
  let data: IndexData = {
    navLinks: [
      {
        title: 'GitHub',
        path: 'https://github.com/coelhucas',
        icon: 'github',
      },
      {
        title: 'Twitter',
        path: 'https://twitter.com/coelhucass',
        icon: 'twitter',
      },
      {
        title: 'Blog',
        path: '/blog',
        icon: 'blog',
        anchor: false,
      },
      {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/lucascoelhoc',
        icon: 'linkedin',
      },
      {
        title: 'Youtube',
        path: 'https://youtube.com/c/cucadevs',
        icon: 'youtube',
      },

    ],
    projects: [
      {
        title: 'yoga',
        path: 'https://github.com/gympass/yoga',
        tags: ['JS'],
      },
      {
        title: 'pixel',
        path: 'https://github.com/coelhucas/pixel',
        tags: ['JS'],
      },
      {
        title: 'mini-styled',
        path: 'https://github.com/coelhucas/mini-styled',
        tags: ['JS'],
      },
      {
        title: 'outline me',
        path: 'https://github.com/coelhucas/outline-me',
        tags: ['JS'],
      },
      {
        title: 'king of parties',
        path: '/kop',
        anchor: false,
        tags: ['GDScript'],
      },
      {
        title: 'hitbox editor',
        path: 'https://github.com/coelhucas/hitbox-editor/',
        tags: ['GDScript'],
      },
      {
        title: 'rgba based map generator',
        path: 'https://github.com/coelhucas/unity-rgba-level-generator',
        tags: ['C#'],
      },
      {
        title: 'see more ⌄',
        path: 'https://github.com/coelhucas/',
        props: {
          omitUnderline: true
        }
      },

    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Lucas Coelho - coelhucas",
    description: "Welcome to my place :)"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
   <>
    <section>
      <h1>Lucas Coelho</h1>
      
      <h2>Software Engineer @ <Link anchor highlight weight="bold" to="https://z1.app/">Z1</Link></h2>
      <p>Besides that I do game development in my spare time @ <Link anchor highlight weight="bold" to="https://softwool.co">Softwool</Link>.
        <br />
        Check out <Link anchor highlight to="https://cuca.itch.io/">my games</Link> as well.
      </p>
      <hr />
      <nav>

      <ul className="media-links">
        {data.navLinks.map(({ anchor = true, path, title, icon }) => (
          <li key={title}>
            <Link className="icon-anchor" anchor={anchor} to={path}>
              <Icon as={icon} />
              {title}
            </Link>
          </li>
        ))}
      </ul>
      </nav>

    </section>
    <section className="projects-container">
      <b>Projects</b>
      <ul>
        {data.projects.map(({ title, path, anchor = true, tags, props }) => (
          <li key={title}>
            <Link highlight anchor={anchor} to={path} tags={tags} {...props}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </>
  );
}
