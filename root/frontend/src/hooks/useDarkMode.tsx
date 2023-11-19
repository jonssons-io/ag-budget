import { useState, useEffect } from "react";

/**
 * Used to control the palette used in the app.
 *
 * Returns a variable that holds the users preference,
 * and a function to change it.
 *
 * @var darkMode A boolean value, true if the user prefers dark mode.
 * @var handleChangeMode A function that changes the value of darkMode.
 * @returns [darkMode, handleChangeMode]
 * @example
 * const [darkMode, handleChangeMode] = useDarkMode();
 */
const useDarkMode = () => {
  /**
   * Checks if the browser preference matches dark mode.
   *
   * Stores the preference in localStorage.
   *
   * @returns A boolean value, true if the user prefers dark mode.
   */
  const isSystemDarkMode = () => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    localStorage.setItem("app.darkMode", prefersDarkMode ? "true" : "false");
    return prefersDarkMode;
  };

  const storedDarkMode = localStorage.getItem("app.darkMode");
  const [darkMode, setDarkMode] = useState<boolean>(
    storedDarkMode ? Boolean(storedDarkMode) : isSystemDarkMode(),
  );

  /**
   * Sets the value of darkMode to the opposite of its current value.
   *
   * Stores the new value in localStorage.
   */
  const handleChangeMode = () => {
    const currentMode = darkMode;
    setDarkMode(!currentMode);
    localStorage.setItem("app.darkMode", String(!currentMode));
  };

  useEffect(() => {
    const handleSystemThemeChange = () => {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDarkMode);
      localStorage.setItem("app.darkMode", String(prefersDarkMode));
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return [darkMode, handleChangeMode] as const;
};

export default useDarkMode;
