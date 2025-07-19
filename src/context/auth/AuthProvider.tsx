import Cookies from "js-cookie";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import { encode } from "../../functions/encoding";
import type { LoginForm } from "../../types/login";
import { AuthContext, type AuthContextType } from "./AuthContext";

export const USER_COOKIE_KEY = "gong-access-token";

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();

  const login = ({ email, password }: LoginForm) => {
    const token = encode(email, password);
    console.log("login", email, password, token); // TODO loging logic
    // Note: Lets pretend the userId is a secure access token that came back in the login response
    Cookies.set(USER_COOKIE_KEY, token, { expires: 1 });
    navigate("/");
  };

  const logout = () => {
    Cookies.remove(USER_COOKIE_KEY);
    navigate("/login", { replace: true });
  };

  const localToken = Cookies.get(USER_COOKIE_KEY);
  const user = localToken
    ? {
        id: localToken,
      }
    : undefined;

  const value: AuthContextType = useMemo(() => {
    return {
      isLoggedIn: !!user,
      user,
      login,
      logout,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
