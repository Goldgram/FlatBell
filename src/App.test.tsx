import Cookies from "js-cookie";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { USER_COOKIE_KEY } from "./context/auth/AuthProvider";
import * as apiFile from "./functions/api";
import { mockUsers } from "./mocks/user";
import { App } from "./App";

describe("App", () => {
  vi.spyOn(apiFile, "getUserId").mockResolvedValue(222);
  vi.spyOn(apiFile, "getAllUsers").mockResolvedValue(mockUsers);

  afterEach(() => {
    Cookies.remove(USER_COOKIE_KEY);
  });

  describe("Login Page", () => {
    it("should show the login form when not authenticated", async () => {
      render(<App />);

      expect(await screen.getByText("Please login")).toBeVisible();
      expect(
        screen.getByRole("textbox", {
          name: /email address:/,
        })
      ).toHaveValue("");
      expect(screen.getByTestId("user-password")).toHaveValue("");
      expect(screen.getByRole("button", { name: /Login/ })).toBeVisible();
    });

    it("should fill the form and login", async () => {
      render(<App />);

      expect(await screen.getByText("Please login")).toBeVisible();
      expect(Cookies.get(USER_COOKIE_KEY)).toBeUndefined();

      const emailInput = screen.getByRole("textbox", {
        name: /email address:/,
      });
      const passwordInput = screen.getByTestId("user-password");

      fireEvent.change(emailInput, { target: { value: "hello@wolf.com" } });
      fireEvent.change(passwordInput, { target: { value: "abc-123" } });

      expect(emailInput).toHaveValue("hello@wolf.com");
      expect(passwordInput).toHaveValue("abc-123");

      await userEvent.click(screen.getByRole("button", { name: /Login/ }));

      expect(await screen.findByText("Hierarchy Tree")).toBeVisible();
      expect(Cookies.get(USER_COOKIE_KEY)).toEqual("222");
    });
  });

  describe("Hierarchy Tree Page", () => {
    beforeEach(() => {
      Cookies.set(USER_COOKIE_KEY, "111");
    });

    it("should show the hierarchy tree when previously logged in, and toggle tree", async () => {
      render(<App />);

      expect(await screen.findByText("Hierarchy Tree")).toBeVisible();
      expect(
        screen.getByText("Ronnen Gurevitch ronnen.gurevitch@foo.com")
      ).toBeVisible();
      expect(
        screen.getByText("Dorit Nuhum dorit.nuhum@foo.com")
      ).not.toBeVisible();

      await userEvent.click(
        screen.getByText("Ronnen Gurevitch ronnen.gurevitch@foo.com")
      );

      expect(screen.getByText("Dorit Nuhum dorit.nuhum@foo.com")).toBeVisible();

      await userEvent.click(
        screen.getByText("Ronnen Gurevitch ronnen.gurevitch@foo.com")
      );

      expect(
        screen.getByText("Dorit Nuhum dorit.nuhum@foo.com")
      ).not.toBeVisible();
    });

    it("should logout of the hierarchy tree and redirect to login", async () => {
      render(<App />);

      expect(await screen.findByText("Hierarchy Tree")).toBeVisible();
      expect(Cookies.get(USER_COOKIE_KEY)).toEqual("111");

      await userEvent.click(screen.getByRole("button", { name: /Logout/ }));

      expect(screen.getByText("Please login")).toBeVisible();
      expect(Cookies.get(USER_COOKIE_KEY)).toBeUndefined();
    });
  });
});
