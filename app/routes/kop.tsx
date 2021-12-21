import { useLoaderData } from "remix";
import type { LinksFunction, MetaFunction } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import sharedStylesUrl from "~/styles/blog/shared.css";
import stylesUrl from "~/styles/blog/posts-list.css";
import Link from '~/components/Link';

export let meta: MetaFunction = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: sharedStylesUrl }, { rel: 'stylesheet', href: stylesUrl }];
};

export default function KingOfParties() {
  return (
    <section>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h1>King of Parties</h1>
      <ul><b>Links</b>
        <li><Link anchor to="https://github.com/coelhucas/kop">Official Repository</Link></li>
        <li><Link anchor to="https://www.youtube.com/watch?v=etAaMHgi8a0">[PT-BR] Apresentação (Youtube)</Link></li>
        <li><Link anchor to="https://github.com/coelhucas/mp-game-pck/archive/master.zip">Download - Windows 🗑️</Link></li>
        <li><Link anchor to="https://github.com/coelhucas/mp-game-pck/archive/linux.zip">Download - Linux 🐧</Link></li>
        <li><Link anchor to="https://github.com/coelhucas/mp-game-pck/archive/macos.zip">Download - MacOS 🍏</Link></li>
      </ul>
      <br />
      <h2>About</h2>
      <p>
        King of Parties is an online multiplayer game where one of the players, the birthday person, which is the <i>King of the Party</i>,
        mad with the surprise party, has to kill all their guests before the party is over. And the guests need to survive by hiding and
        running away from the shots of the King.
      </p>
      <p>The project is licensed over the <b><Link anchor to="http://www.wtfpl.net/about/">WTFPL</Link> license.</b></p>
      <h2>Gameplay</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FMZOk2F4W_w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p>Made by <Link to="/">Lucas Coelho</Link></p>
    </section>
  );
}
