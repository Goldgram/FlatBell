import { useState } from "react";
import { PageHeader, PageLayout } from "../components/PageLayout";
import { useAuthContext } from "../context/auth/AuthContext";
import { isValidLoginForm } from "../functions/login";
import type { LoginForm } from "../types/login";

export const LoginPage = () => {
  const { login, isLoggingIn } = useAuthContext();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const updateForm = (partialForm: Partial<LoginForm>) => {
    setForm((currentForm) => {
      return {
        ...currentForm,
        ...partialForm,
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidLoginForm(form)) {
      login(form);
    } else {
      // Note: Add log/notifications as needed
      alert("You have entered an invalid username or password");
    }
  };

  return (
    <PageLayout>
      <PageHeader title="Please login" />
      <form onSubmit={onSubmit}>
        <input
          id="user-email"
          name="user-email"
          type="email"
          autoComplete="email"
          required={true}
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
          disabled={isLoggingIn}
        />
        <input
          id="user-password"
          name="user-password"
          type="password"
          required={true}
          value={form.password}
          onChange={(e) => updateForm({ password: e.target.value })}
          disabled={isLoggingIn}
        />
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>
      </form>
    </PageLayout>
  );
};
