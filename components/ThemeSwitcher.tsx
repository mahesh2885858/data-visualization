"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((p) => {
      if (p) {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      return !p;
    });
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
          darkMode
            ? " fill-purple-950 md:fill-purple-200"
            : "fill-blue-950 md:fill-blue-200"
        } transition-all duration-500 `}
      />
      <circle
        cx={darkMode ? 36 : 12}
        cy={11}
        r={8}
        className={`${
          darkMode
            ? " fill-purple-200 md:fill-purple-800"
            : "fill-blue-200 md:fill-blue-800"
        } transition-all duration-500 `}
      />
    </svg>
  );
}
