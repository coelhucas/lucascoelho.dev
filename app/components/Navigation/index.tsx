import Icon, { IconNames } from "../Icon";
import Link from "../Link";

type LinkProps = {
  title: string;
  path: string;
  icon: IconNames;
  rel?: string;
};

const navLinks = [
  {
    title: "Email",
    path: "mailto:contact@lucascoelho.dev",
    icon: "email",
  },
  {
    title: "GitHub",
    path: "https://github.com/coelhucas",
    icon: "github",
  },
  {
    title: "Mastodon",
    path: "https://mastodon.gamedev.place/@cuca",
    icon: "mastodon",
    rel: "me",
  },
] as LinkProps[];

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">./</Link>
      </li>
      <li>
        <Link to="/blog">/blog</Link>
      </li>
    </ul>

    <ul>
      {navLinks.map(({ path, title, icon, rel }) => {
        const resolvedRel = rel ? { rel } : {};
        return (
          <li key={title}>
            <Link
              target="_blank"
              className="icon__anchor"
              to={path}
              {...resolvedRel}
            >
              <Icon as={icon} />
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Navigation;
