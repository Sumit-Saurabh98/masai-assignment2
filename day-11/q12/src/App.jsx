import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import NestedComponent from "./NestedComponent";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={styles}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NestedComponent />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;