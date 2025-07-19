/* eslint-disable  @typescript-eslint/no-explicit-any */
import { describe, expect, it } from "vitest";
import {
  mockUser1,
  mockUser2,
  mockUser3,
  mockUsers,
  mockUserTree,
} from "../mocks/user";
import { createUserTree, getFullUserName, getUserInitials } from "./user";

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

    it("should return unknown for falsy cases", () => {
      expect(getFullUserName({} as any)).toEqual("Unknown");
    });
  });

  describe("getUserInitials", () => {
    it("should return users full name", () => {
      expect(getUserInitials(mockUser1)).toEqual("RG");
      expect(getUserInitials(mockUser2)).toEqual("DN");
      expect(getUserInitials(mockUser3)).toEqual("RY");
    });

    it("should return users first name only", () => {
      expect(getUserInitials({ firstName: "John" } as any)).toEqual("J");
    });

    it("should return users last name only with honorific", () => {
      expect(getUserInitials({ lastName: "Smith" } as any)).toEqual("S");
    });

    it("should return question mark for falsy cases", () => {
      expect(getUserInitials({} as any)).toEqual("?");
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
