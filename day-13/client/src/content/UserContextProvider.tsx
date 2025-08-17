import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export interface IUser {
  _id: string;
  email: string;
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  async function register(value: { email: string; password: string }) {
    let response;
    setIsLoading(true);

    try {
      response = await axiosInstance.post("/auth/register", value);

      setIsAuth(true);
      setIsLoading(false);

      setUser(response.data.user);

      toast.success(response.data.message);
    } catch (error) {
      if(error instanceof AxiosError){
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      }else{
        toast.error("Please try again later");
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function login(value: { email: string; password: string }) {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/auth/login", value);

      setUser(response.data.user);
      setIsAuth(true);

      toast.success("Login successful");
    } catch (error) {
      console.error("Error during login", error);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    setIsLoading(true);

    try {
      await axiosInstance.get("/auth/logout");

      setIsAuth(false);
      setIsLoading(false);

      setUser(null);

      toast.success("Logout successful");
    } catch (error) {
      console.log("Error during logout", error);
      toast.error("Logout failed");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function checkAuth() {
    setIsCheckingAuth(true);

    try {
      const response = await axiosInstance.get("/auth/me");

      setIsAuth(true);
      setIsCheckingAuth(false);

      setUser(response.data.user);
    } catch (error) {
      console.log("Error during checkAuth", error);
      setIsAuth(false);
      setIsCheckingAuth(false);
    } finally {
     setIsCheckingAuth(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, register, login, isAuth, isLoading, logout, isCheckingAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
