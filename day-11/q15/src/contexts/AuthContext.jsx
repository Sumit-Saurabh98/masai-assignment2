import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleAuth = () => setLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider value={{ loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
