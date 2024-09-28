"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
