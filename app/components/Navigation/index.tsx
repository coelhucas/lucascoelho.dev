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
    <div className="navigation-links">
      <Link to="/">./</Link>
      <Link to="/blog">/blog</Link>
      <Link to="/speaker">/speaker</Link>
    </div>

    <ul className="media-links">
      {navLinks.map(({ path, title, icon, rel }) => {
        const resolvedRel = rel ? { rel } : {};
        return (
          <li key={title}>
            <Link
              target="_blank"
              className="icon-anchor"
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
