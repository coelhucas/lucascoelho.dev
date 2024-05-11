import { Theme, useTheme } from "remix-themes";
import Icon from "./Icon";

const ThemeButton = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      onClick={() =>
        setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
      }
      className="icon-button"
      aria-label="Switch theme"
    >
      <Icon as={theme === Theme.LIGHT ? "moon" : "sun"} />
    </button>
  );
};

export default ThemeButton;
