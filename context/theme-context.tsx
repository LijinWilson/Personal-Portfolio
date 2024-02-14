"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type theme = "light" | "dark";

type ThemeContextProviderProp = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProp) {
  const [theme, setTheme] = useState<theme>("light");

  /* 
      - we set the tailwind dark mode triggering via adding the class to dom not automatically.
      - we added the dark mode only certain action is done.
      - so in each function we added the class integrating function
    */

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // retain the state of the  theme even after the reload
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
      // used for getting the systems theme(light/dark).
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook to use the context
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "Use theme context must be used within a ThemeContextProvider"
    );
  }

  return context;
}
