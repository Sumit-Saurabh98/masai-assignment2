import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Box } from "@mui/material";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Navbar />
            <MainContent />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
