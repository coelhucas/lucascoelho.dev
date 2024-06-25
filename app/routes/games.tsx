const games = {
  steam: [
    {
      link: "https://store.steampowered.com/developer/Softwool",
      name: "All my Steam games",
    },
    {
      link: "https://store.steampowered.com/app/2773700/Siege_n_Sow/",
      name: "(WIP) Siege 'n Sow",
    },
    {
      link: "https://store.steampowered.com/app/2210670/Torecower/",
      name: "Torecower",
    },
    {
      link: "https://store.steampowered.com/app/1956400/PISTOLA/",
      name: "PISTOLA",
    },
  ],
  itch: [
    {
      link: "https://cuca.itch.io",
      name: "All my itch.io games",
    },
  ],
  gamejolt: [],
};

export default function Page() {
  return (
    <main>
      <h1>I make games!</h1>
      <p>
        I'm in a hurry while I make this page so uhh... I'll just list all of
        the games that didn't got lost over time. Thanks for coming by!
      </p>
      <p>See below:</p>
      <ul>
        {games.steam.map((item) => (
          <li key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              [Steam] {item.name}
            </a>
          </li>
        ))}
        <li>
          <a href="https://cuca.itch.io" target="_blank" rel="noreferrer">
            All my itch.io games
          </a>
        </li>
        <li>
          <a
            href="https://gamejolt.com/@cucadev/games"
            target="_blank"
            rel="noreferrer"
          >
            All my gamejolt games
          </a>
        </li>
      </ul>
    </main>
  );
}
