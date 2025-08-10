import { useAuth } from "./AuthContext";

export default function Main() {
  const { isLoggedIn } = useAuth();
  return <main>{isLoggedIn ? "You are logged in." : "You are logged out."}</main>;
}
