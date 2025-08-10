import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./UserContext.JS";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <UserProvider>
      <Router>
        <nav style={{ margin: "10px" }}>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/settings">Settings</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
