import React from "react";

const ThemedBox = ({ theme, text }) => {
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "8px",
        flex: 1,
        textAlign: "center",
        boxShadow:
          theme === "light"
            ? "0 2px 5px rgba(0,0,0,0.2)"
            : "0 2px 5px rgba(255,255,255,0.1)",
        transition: "0.3s ease"
      }}
    >
      {text}
    </div>
  );
};

export default ThemedBox;
