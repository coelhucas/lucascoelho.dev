import type { LinksFunction } from "@remix-run/node";
import Link from "~/components/Link";
import stylesUrl from "~/styles/blog/posts-list.css";
import globalMeta from "~/utils/global-meta";

import littleMe from "../images/little-me.jpg";
import starsGame from "../images/stars-game.jpg";
import landExplorers from "../images/land-explorers.png";
import HireMeFeature from "~/components/HireMeFeature";


export const meta = () => {
  return [
    ...globalMeta,
    { title: "Hire me | Lucas Coelho" },
    { description: "Know more about me and why should you have me hired :)" },
  ];
};

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
  ];
};

export default function HireMe() {
  return (
    <section>
      <h1>Why should you hire me</h1>
      <h2>Overview</h2>
      <HireMeFeature aside={
        <figure style={{ margin: 0 }}>
          <img src={littleMe} style={{ width: "100%" }} />
          <figcaption>Very small me on computers</figcaption>
        </figure>
      }>
        I've started playing with game making at the age of 8, when RPG Maker forums were a huge thing here in Brazil. I also had the opportunity to play with Macromedia/Adobe Flash and lots of engines, such as Game Maker, The Games Factory/Multimedia Fusion and anything that appeared at that time.
      </HireMeFeature>
      <HireMeFeature left aside={

        <figure style={{ margin: 0 }}>
          <img src={starsGame} style={{ width: "100%", objectFit: "contain" }} />
          <figcaption>One of the oldest games I have saved, made when I was ~12, with Multimedia Fusion 2</figcaption>
        </figure>
      }
      >
        After some time, it seemed that he things I could build were limited and everyone was talking about doing actual code by using C# with Unity, so I did it!

      </HireMeFeature>
      <HireMeFeature aside={

        <figure style={{ margin: 0 }}>
          <img src={landExplorers} style={{ width: "100%", objectFit: "contain" }} />
          <figcaption>One of the oldest games I have saved, made when I was ~12, with Multimedia Fusion 2</figcaption>
        </figure>
      }
      >
        It was only in 2017, though, that I started releasing stuff, with both <a href="https://gamejolt.com/games/moogi/285671">Moogi</a> and <a href="https://cuca.itch.io/get-out">Get Out</a> created for local game jams. Around the same time I started freelancing for game projects that ended up not being released

      </HireMeFeature>



      <figure>
        <img src={starsGame} />
        <figcaption>One of the oldest games I have saved, made when I was ~12, with Multimedia Fusion 2</figcaption>
      </figure>
      <figure>
        <img src={landExplorers} />
        <figcaption>One of the oldest games I have saved, made when I was ~12, with Multimedia Fusion 2</figcaption>
      </figure>
      <p>It was only in 2017, though, that I started releasing stuff, with both <a href="https://gamejolt.com/games/moogi/285671">Moogi</a> and <a href="https://cuca.itch.io/get-out">Get Out</a> created for local game jams. Around the same time I started freelancing for game projects that ended up not being released</p>
      <p>Around the same time, I got to know Godot Engine and started a youtube channel focused in teaching programming with GDScript, with a <a href="https://www.youtube.com/watch?v=0vtJvvgp3_k&list=PLo6WV7lvEcW2iHXzdPspUYcJkrPnQAumo">very complete playlist of videos</a>. I kept doing prototypes and Jam games.</p>
      <p>As one of the projects I did during that time, there was an open source multiplayer game to showcase Godot's WebSockets working</p>
      <iframe
        width="560"
        height="315"
        title="King of Parties Gameplay"
        src="https://www.youtube.com/embed/FMZOk2F4W_w?enablejsapi=1&origin=http://lucascoelho.dev/kop"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p>
        Made by <Link to="/">Lucas Coelho</Link>
      </p>
    </section >
  );
}
