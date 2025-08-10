import React from "react";
import { Box, Typography } from "@mui/material";
import { useThemeMode } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useThemeMode();

  return (
    <Box
      sx={{
        backgroundColor: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
        padding: "10px",
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">© 2025 My Dashboard</Typography>
    </Box>
  );
}
