import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
