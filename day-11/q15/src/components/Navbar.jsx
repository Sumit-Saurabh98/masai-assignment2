import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";

export default function Navbar() {
  const { loggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useThemeMode();

  return (
    <AppBar position="static" color={theme === "light" ? "primary" : "secondary"}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Dashboard</Typography>
        <div>
          <Typography variant="body1" style={{ display: "inline-block", marginRight: "10px" }}>
            {loggedIn ? "Logged In" : "Logged Out"}
          </Typography>
          <Button color="inherit" onClick={toggleAuth}>
            {loggedIn ? "Logout" : "Login"}
          </Button>
          <Button color="inherit" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
