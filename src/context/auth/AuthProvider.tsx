import { useMemo } from "react";
import { AuthContext, type AuthContextType } from "./AuthContext";

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const login = () => {
    console.log("login"); // TODO loging logic
  };

  const logout = () => {
    console.log("login"); // TODO logout logic
  };

  const value: AuthContextType = useMemo(() => {
    return {
      isLoggedIn: true,
      login,
      logout,
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
