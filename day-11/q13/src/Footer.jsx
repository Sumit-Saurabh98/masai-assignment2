import { useAuth } from "./AuthContext";

export default function Footer() {
  const { isLoggedIn } = useAuth();
  return <footer>{isLoggedIn ? "Welcome, User" : "Please log in"}</footer>;
}
