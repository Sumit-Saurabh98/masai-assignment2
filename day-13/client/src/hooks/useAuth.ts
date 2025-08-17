import { useContext } from "react";
import { AuthContext } from "@/content/AuthContext";

export function useAuth() {
    const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return ctx;
}