import { useTheme } from "~/misc/ThemeProvider";
import Icon from "./Icon";

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className="icon-button" aria-label="Switch theme">
      <Icon as={theme === "light" ? "moon" : "sun"} />
    </button>
  );
};

export default ThemeButton;
