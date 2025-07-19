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
      alert("You have entered an invalid username or password");
    }
  };

  return (
    <PageLayout>
      <PageHeader title="Please login" />
      <form onSubmit={onSubmit} className="border mx-32 p-4">
        <div className="flex gap-4">
          <label htmlFor="user-email" className="text-right w-32">
            email address:
          </label>
          <input
            id="user-email"
            name="user-email"
            type="email"
            autoComplete="email"
            required={true}
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            disabled={isLoggingIn}
            className="flex-grow border px-2"
          />
        </div>

        <div className="flex gap-4 pt-3">
          <label htmlFor="user-password" className="text-right  w-32">
            password:
          </label>
          <input
            id="user-password"
            name="user-password"
            type="password"
            required={true}
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
            disabled={isLoggingIn}
            className="flex-grow border px-2"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isLoggingIn}
            className="px-12 text-white border border-black rounded-sm cursor-pointer"
            style={{ backgroundColor: "#7822b5" }}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </PageLayout>
  );
};
