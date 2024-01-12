"use client";

import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((p) => !p);
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      return;
    }
  }, []);

  return (
    <svg
      onClick={toggleDarkMode}
      className="absolute top-2 right-2"
      viewBox="0 0 48 24"
      height="24"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0}
        y={0}
        height={22}
        width={48}
        rx={12}
        className={`${
          isDarkMode
            ? " fill-purple-950 md:fill-purple-200"
            : "fill-blue-950 md:fill-blue-200"
        } transition-all duration-500 `}
      />
      <circle
        cx={isDarkMode ? 36 : 12}
        cy={11}
        r={8}
        className={`${
          isDarkMode
            ? " fill-purple-200 md:fill-medium-purple"
            : "fill-blue-200 md:fill-medium-purple"
        } transition-all duration-500 `}
      />
    </svg>
  );
};
export default ThemeSwitcher;
