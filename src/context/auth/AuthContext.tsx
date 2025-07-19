import { createContext, useContext } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const DEFAULT_AUTH_CONTEXT = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(DEFAULT_AUTH_CONTEXT);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
