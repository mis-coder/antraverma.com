"use client";
import { useLayoutEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useLayoutEffect(() => {
    const isDarkTheme = window?.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkTheme) {
      setIsDarkTheme(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? (
        <FaSun className="animate-grow cursor-pointer" size="20px" />
      ) : (
        <FaMoon className="animate-grow cursor-pointer" size="20px" />
      )}
    </button>
  );
};

export default ToggleTheme;
