import { useState } from "react";
import { useAuthContext } from "../context/auth/AuthContext";
import { isValidLoginForm } from "../functions/login";
import type { LoginForm } from "../types/login";

export const LoginPage = () => {
  const { login } = useAuthContext();

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
    }
    //TODO handle error
  };

  return (
    <div>
      <p>Please login</p>
      <form onSubmit={onSubmit}>
        <input
          id="user-email"
          name="user-email"
          type="email"
          autoComplete="email"
          required={true}
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
        <input
          id="user-password"
          name="user-password"
          type="password"
          required={true}
          value={form.password}
          onChange={(e) => updateForm({ password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
