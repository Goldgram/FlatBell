import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HierarchyTreePage } from "./pages/HierarchyTreePage";
import { LoginPage } from "./pages/LoginPage";
import { ErrorPage } from "./pages/ErrorPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HierarchyTreePage />} />
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
