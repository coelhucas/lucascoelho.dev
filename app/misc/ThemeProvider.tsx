import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Themes = "light" | "dark";

type ThemeContextValue = {
  theme: "light" | "dark";
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const value = useContext(ThemeContext);

  if (value === null) {
    throw new Error("useCounter cannot be called without a CounterProvider");
  }

  return value;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

// TODO: Fix theme "blink" when using light one. [remix-themes](https://github.com/abereghici/remix-themes) might help if I don't want to manage the cookies manually.
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = (((typeof window === "object" &&
    localStorage.getItem("theme")) ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")) ||
    "light") as Themes;
  const [localTheme, setLocalTheme] = useState<Themes>(theme);

  useEffect(() => {
    document.firstElementChild?.setAttribute("color-scheme", localTheme);
  }, [localTheme]);

  const toggle = useCallback(() => {
    setLocalTheme((prev) => {
      const nextTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo(() => ({ theme: theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
