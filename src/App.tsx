import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import { useAuthContext } from "./context/auth/AuthContext";
import { AuthProvider } from "./context/auth/AuthProvider";
import { ErrorPage } from "./pages/ErrorPage";
import { HierarchyTreePage } from "./pages/HierarchyTreePage";
import { LoginPage } from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersProvider } from "./context/users/UsersProvider";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthenticatedRoutes />}>
              <Route
                index
                element={
                  <UsersProvider>
                    <HierarchyTreePage />
                  </UsersProvider>
                }
              />
            </Route>
            <Route path="/login" element={<UnauthenticatedRoutes />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AuthenticatedRoutes = () => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const UnauthenticatedRoutes = () => {
  const { isLoggedIn } = useAuthContext();
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
