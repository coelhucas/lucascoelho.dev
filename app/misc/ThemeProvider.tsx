import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Themes = "light" | "dark"

type ThemeContextValue = {
    theme?: "light" | "dark";
    toggle: () => void;
    isLoading: boolean
  };
   
const ThemeContext = createContext<ThemeContextValue | null>(null);

function isValidTheme(value: string = ""): value is Themes {
    return ['light', 'dark'].includes(value);
  }
   
  export function useTheme() {
    const value = useContext(ThemeContext);
   
    if (value === null) {
      throw new Error(
        'useCounter cannot be called without a CounterProvider'
      );
    }
   
    return value;
  }
   
  type ThemeProviderProps = {
    children: React.ReactNode;
  };
   
  export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Themes>();
    const [isLoading, setIsLoading] = useState(true)
   
    const { matches: isUsingDarkTheme } =
    typeof window === "object"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : { matches: false };

    // Get initial theme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")

        if (storedTheme && isValidTheme(storedTheme)) {
            setTheme(storedTheme)
            setIsLoading(false)
        } else {
            setTheme(() => {
              const nextTheme = isUsingDarkTheme ? "dark" : "light"
              localStorage.setItem("theme", nextTheme)
              return nextTheme
            })
            setIsLoading(false)
        }
    }, [isUsingDarkTheme])

    useEffect(() => {
        if (isValidTheme(theme)) {
            document.firstElementChild?.setAttribute("color-scheme", theme);
        }
    }, [theme])

    const toggle = useCallback(() => {
        setTheme(prev => {
            const nextTheme = prev === "light" ? "dark" : "light"
            localStorage.setItem("theme", nextTheme)
            return nextTheme
        });
    }, [])
   
    const value = useMemo(
      () => ({ theme, toggle, isLoading }),
      [theme, toggle, isLoading]
    );
   
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
  }