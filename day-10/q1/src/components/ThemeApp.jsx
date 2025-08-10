import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";

const ThemeApp = () => {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage on first render
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Store theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#1a1a1a",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
        transition: "0.3s ease"
      }}
    >
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
};

export default ThemeApp;
