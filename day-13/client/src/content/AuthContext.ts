import { createContext } from "react";
import type { IUser } from "./UserContextProvider";

interface AuthContextValue {
  user: IUser | null;
  register: (value: { email: string; password: string }) => Promise<void>;
  login: (value: { email: string; password: string }) => Promise<void>;
  isAuth: boolean;
  isLoading: boolean;
  isCheckingAuth: boolean;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);