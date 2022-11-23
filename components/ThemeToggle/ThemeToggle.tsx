import { useTheme } from "next-themes";
import { useEffect } from "react";
import {
  ThemeToggleButton,
  ThemeToggleComponent,
  ThemeToggleInput,
} from "./ThemeToogle.styles";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const prefersDarkMQ = "(prefers-color-scheme: dark)";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.DARK : Theme.LIGHT);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () =>
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  return (
    <ThemeToggleComponent tabIndex={0} title="theme switcher" id="theme-switch">
      <ThemeToggleInput
        type="checkbox"
        value=""
        id="default-toggle"
        role="switch"
        checked={
          (theme === "system" && window?.matchMedia(prefersDarkMQ)) ||
          theme === Theme.DARK
        }
        aria-labelledby="theme-switch"
        readOnly
      />
      <ThemeToggleButton
        type="button"
        aria-label="theme-toggle"
        onClick={toggleTheme}
      />
    </ThemeToggleComponent>
  );
};

export { ThemeToggle };
