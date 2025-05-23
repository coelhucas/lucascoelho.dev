import type { HeadersFunction } from "react-router";
import Link from "~/components/Link";
import globalMeta from "~/utils/global-meta";

export const meta = () => {
  return [
    ...globalMeta,
    { title: "King of Parties | Lucas Coelho" },
    {
      property: "og:title",
      content:
        "Small peer-to-peer multiplayer game made as a proof of concept.",
    },
    {
      name: "description",
      content:
        "Small peer-to-peer multiplayer game made as a proof of concept.",
    },
    {
      property: "og:description",
      content:
        "Small peer-to-peer multiplayer game made as a proof of concept.",
    },
  ];
};

export const headers: HeadersFunction = () => ({
  "Content-Security-Policy": "default-src: *; frame-src *;",
});

export default function KingOfParties() {
  return (
    <main>
      <section>
        <h1>King of Parties</h1>
        <ul>
          <b>Links</b>
          <li>
            <Link to="https://github.com/coelhucas/kop">
              Official Repository
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/watch?v=etAaMHgi8a0">
              [PT-BR] Apresentação (Youtube)
            </Link>
          </li>
          <li>
            <Link to="https://github.com/coelhucas/mp-game-pck/archive/master.zip">
              Download - Windows 🗑️
            </Link>
          </li>
          <li>
            <Link to="https://github.com/coelhucas/mp-game-pck/archive/linux.zip">
              Download - Linux 🐧
            </Link>
          </li>
          <li>
            <Link to="https://github.com/coelhucas/mp-game-pck/archive/macos.zip">
              Download - MacOS 🍏
            </Link>
          </li>
        </ul>
        <br />
        <h2>About</h2>
        <p>
          King of Parties is an online multiplayer game where one of the
          players, the birthday person, which is the <i>King of the Party</i>,
          mad with the surprise party, has to kill all their guests before the
          party is over. And the guests need to survive by hiding and running
          away from the shots of the King.
        </p>
        <p>
          The project is licensed over the{" "}
          <b>
            <Link to="http://www.wtfpl.net/about/">WTFPL</Link> license.
          </b>
        </p>
        <h2>Gameplay</h2>
        <iframe
          width="560"
          height="315"
          title="King of Parties Gameplay"
          src="https://www.youtube-nocookie.com/embed/FMZOk2F4W_w?enablejsapi=1&origin=http://lucascoelho.dev/kop"
          allow="encrypted-media;"
          allowFullScreen
        ></iframe>
        <p>
          Made by <Link to="/">Lucas Coelho</Link>
        </p>
      </section>
    </main>
  );
}
