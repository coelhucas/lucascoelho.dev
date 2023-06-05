import { useEffect, useState } from "react";
import Icon from "./Icon";

const ThemeButton = () => {
  const [theme, setTheme] = useState<string>();

  const { matches: isUsingDarkTheme } =
    typeof window === "object"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : { matches: false };

  useEffect(() => {
    const firstElementChild = document.firstElementChild;

    const currentScheme = firstElementChild?.getAttribute("color-scheme");

    setTheme(isUsingDarkTheme && currentScheme !== "light" ? "dark" : "light");
  }, [isUsingDarkTheme]);

  useEffect(() => {
    if (theme) document.firstElementChild?.setAttribute("color-scheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const firstElementChild = document.firstElementChild;
    const currentScheme = firstElementChild?.getAttribute("color-scheme");
    setTheme(currentScheme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="icon-button">
      <Icon as={theme === "light" ? "moon" : "sun"} />
    </button>
  );
};

export default ThemeButton;
