// import Cookies from "js-cookie";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
// import { USER_COOKIE_KEY } from "./context/auth/AuthProvider";
import { App } from "./App";
// import * as apiFile from "./functions/api";

describe("App", () => {
  describe("Login", () => {
    it("should show the login page when not authenticated", () => {
      render(<App />);

      const title = screen.getByText("Please login");
      expect(title).toBeTruthy();
      // check for other things
    });

    // login test
  });

  // describe("Hierarchy Tree", () => {
  //   afterEach(() => {
  //     Cookies.remove(USER_COOKIE_KEY);
  //   });

  //   it("should show the hierarchy tree page when already authenticated", () => {
  //     Cookies.set(USER_COOKIE_KEY, "123");
  //     vi.spyOn(apiFile, "getAllUsers").mockResolvedValue([]);
  //     render(<App />);

  //     const title = screen.queryByText("Hierarchy Tree");
  //     expect(title).toBeTruthy();
  //     // check other things and toggle the content
  //   });

  //   // logout test
  // });
});
