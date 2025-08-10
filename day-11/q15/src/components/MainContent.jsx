import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useThemeMode } from "../contexts/ThemeContext";

export default function MainContent() {
  const { theme } = useThemeMode();
  const products = ["Product A", "Product B", "Product C", "Product D"];

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              backgroundColor: theme === "light" ? "#fff" : "#444",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <CardContent>
              <Typography variant="h6">{product}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
