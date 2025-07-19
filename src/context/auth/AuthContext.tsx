import { createContext, useContext } from "react";
import type { User } from "../../types/user";
import type { LoginForm } from "../../types/login";

export interface AuthContextType {
  isLoggedIn: boolean;
  user: User | undefined;
  login: (loginForm: LoginForm) => void;
  logout: () => void;
}

export const DEFAULT_AUTH_CONTEXT = {
  isLoggedIn: false,
  user: undefined,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(DEFAULT_AUTH_CONTEXT);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
