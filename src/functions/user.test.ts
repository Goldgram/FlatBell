/* eslint-disable  @typescript-eslint/no-explicit-any */
import { describe, expect, it } from "vitest";
import {
  mockUser1,
  mockUser2,
  mockUser3,
  mockUsers,
  mockUserTree,
} from "../mocks/user";
import { createUserTree, getFullUserName } from "./user";

describe("user functions", () => {
  describe("getFullUserName", () => {
    it("should return users full name", () => {
      expect(getFullUserName(mockUser1)).toEqual("Ronnen Gurevitch");
      expect(getFullUserName(mockUser2)).toEqual("Dorit Nuhum");
      expect(getFullUserName(mockUser3)).toEqual("roni yashar");
    });

    it("should return users first name only", () => {
      expect(getFullUserName({ firstName: "John" } as any)).toEqual("John");
    });

    it("should return users last name only with honorific", () => {
      expect(getFullUserName({ lastName: "Smith" } as any)).toEqual("Mx Smith");
    });
  });

  describe("createUserTree", () => {
    it("should return emply list with falsy inputs", () => {
      expect(createUserTree([])).toEqual([]);
    });

    it("should build user tree from flat user list", () => {
      expect(createUserTree(mockUsers)).toEqual(mockUserTree);
    });
  });
});
