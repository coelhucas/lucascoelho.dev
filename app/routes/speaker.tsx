/** eslint-disable @typescript-eslint/no-extra-semi */
const contents = [
  {
    lang: "pt-br",
    title: "Uso de WebSockets na Godot",
    link: "https://www.youtube.com/watch?v=etAaMHgi8a0",
    kind: "talk",
    date: new Date(2020, 12, 15),
  },
  {
    lang: "pt-br",
    title:
      "Tudo que você precisa saber para fazer seu primeiro jogo usando a Godot 4",
    link: "https://www.youtube.com/watch?v=TxoRtlmCLeU",
    kind: "workshop",
    date: new Date(2024, 1, 25),
  },
];

const getLocale = (locale: string) =>
  ({
    "pt-br": "[PT-BR]",
  })[locale];

const sortByDate = (
  a: (typeof contents)[number],
  b: (typeof contents)[number],
) =>
  a.date.getTime() > b.date.getTime()
    ? -1
    : a.date.getTime() < b.date.getTime()
      ? 1
      : 0;

export default function Page() {
  return (
    <main>
      <h1>I'm afraid of humans</h1>
      <p>
        But from time to time, I see some people outside, and learn a lot.
        Sometimes I even share some of my knowledge out loud.
      </p>
      <p>See below:</p>
      <ul>
        {contents.sort(sortByDate).map((item) => (
          <li key={item.title}>
            <a href={item.link}>
              {item.lang && `${getLocale(item.lang)}: `}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
