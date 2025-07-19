import type { LoginForm } from "../types/login";

export const isValidLoginForm = (form: LoginForm) => {
  // Note: Add specific businness validation here like password format etc
  return !!form.email && !!form.password;
};
