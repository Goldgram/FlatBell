import { createContext, useContext } from "react";
import type { LoginForm } from "../../types/login";

export interface AuthContextType {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  userId: string | undefined;
  login: (loginForm: LoginForm) => void;
  logout: () => void;
}

export const DEFAULT_AUTH_CONTEXT = {
  isLoggedIn: false,
  isLoggingIn: false,
  userId: undefined,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(DEFAULT_AUTH_CONTEXT);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
