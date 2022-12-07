import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(undefined);
  useEffect(() => {
    if (isDark === undefined) {
      setIsDark(theme === Theme.DARK);
    }
  }, [theme]);

  useEffect(() => {
    setTheme(isDark ? Theme.DARK : Theme.LIGHT);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prevState) => !prevState);

  return <DarkModeSwitch checked={isDark} onChange={toggleTheme} size={25} />;
};

export { ThemeToggle };
