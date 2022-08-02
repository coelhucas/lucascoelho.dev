import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";
import type { IconNames } from "~/components/Icon";
import Icon from "~/components/Icon";
import type { ReusedLinkProps } from "~/components/Link";
import Link from "~/components/Link";
import sharedStylesUrl from "~/styles/blog/shared.css";

type NavigationLink = {
  title: string;
  path: string;
  anchor?: boolean;
  tags?: string[];
  icon?: IconNames;
  props?: ReusedLinkProps;
}

type RootLoaderReturn = {
  projects: NavigationLink[];
};

export const loader: LoaderFunction = () => {
  const data: RootLoaderReturn = {
    
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

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: sharedStylesUrl }];
};

export let meta: MetaFunction = () => {
  return {
    title: "Lucas Coelho - coelhucas",
    description: "Welcome to my place :)"
  };
};

export default function Index() {
  let data = useLoaderData<RootLoaderReturn>();

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
    </section>
    <section className="projects-container">
      <Link weight="bold" omitUnderline highlight anchor to="/blog">Projects</Link>
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
