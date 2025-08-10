import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const NestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: "20px",
    marginTop: "10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    borderRadius: "5px"
  };

  return <div style={styles}>This is a nested component</div>;
};

export default NestedComponent;
