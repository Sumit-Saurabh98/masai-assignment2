import React from "react";
import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useThemeMode } from "../contexts/ThemeContext";

export default function Sidebar() {
  const { loggedIn } = useAuth();
  const { theme } = useThemeMode();

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        },
      }}
    >
      <List>
        <ListItem>
          <ListItemText primary={loggedIn ? "Welcome User!" : "Please Login"} />
        </ListItem>
        <ListItem button>
          <Typography>Menu Item 1</Typography>
        </ListItem>
        <ListItem button>
          <Typography>Menu Item 2</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
}
