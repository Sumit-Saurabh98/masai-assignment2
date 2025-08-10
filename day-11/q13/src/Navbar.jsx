import { useAuth } from "./AuthContext";

export default function Navbar() {
  const { isLoggedIn, toggleLogin } = useAuth();
  return (
    <nav>
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </nav>
  );
}
