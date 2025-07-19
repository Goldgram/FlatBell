import Cookies from "js-cookie";
import { useMemo } from "react";
import { useNavigate } from "react-router";
import type { LoginForm } from "../../types/login";
import { AuthContext, type AuthContextType } from "./AuthContext";
import { useMutation } from "@tanstack/react-query";
import { getUserId } from "../../functions/api";

export const USER_COOKIE_KEY = "gong-access-token";

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({ mutationFn: getUserId });

  const login = async (loginForm: LoginForm) => {
    mutate(loginForm, {
      onSuccess: (responseId) => {
        // Note: Lets pretend the userId is something like a secure access token that came back in the login response
        Cookies.set(USER_COOKIE_KEY, `${responseId}`, { expires: 1 });
        navigate("/");
      },
      onError: () => {
        alert("There was an error logging in, please try again.");
      },
    });
  };

  const logout = () => {
    Cookies.remove(USER_COOKIE_KEY);
    navigate("/login", { replace: true });
  };

  const userId = parseInt(Cookies.get(USER_COOKIE_KEY) || "");
  const value: AuthContextType = useMemo(() => {
    return {
      isLoggedIn: !!userId,
      isLoggingIn: isPending,
      userId,
      login,
      logout,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, isPending]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
