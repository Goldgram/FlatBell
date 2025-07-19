import type { User, UserWithChildren } from "../types/user";

export const mockUser1: User = {
  id: 111,
  email: "ronnen.gurevitch@foo.com",
  firstName: "Ronnen",
  lastName: "Gurevitch",
  photo: "https://www.placekittens.com/100/100",
};

export const mockUser2: User = {
  id: 222,
  email: "dorit.nuhum@foo.com",
  firstName: "Dorit",
  lastName: "Nuhum",
  photo: "https://www.placekittens.com/100/100",
  managerId: 111,
};

export const mockUser3: User = {
  id: 333,
  email: "roni.yashar@foo.com",
  firstName: "roni",
  lastName: "yashar",
  photo: "https://www.placekittens.com/100/100",
  managerId: 111,
};

export const mockUser4: User = {
  id: 444,
  email: "andrew.crist@foo.com",
  firstName: "Andrew",
  lastName: "Crist",
  managerId: 333,
};

export const mockUser5: User = {
  id: 555,
  email: "jed.foster@foo.com",
  firstName: "Jed",
  lastName: "Foster",
  managerId: 333,
};

export const mockUser6: User = {
  id: 666,
  email: "Sorin.haloo@foo.com",
  firstName: "Sorin",
  lastName: "haloo",
  managerId: 111,
};

export const mockUser7: User = {
  id: 777,
  email: "Tony.Extra@foo.com",
  firstName: "Tony",
  lastName: "Extra",
};

export const mockUsers: User[] = [
  mockUser7,
  mockUser6,
  mockUser2,
  mockUser1,
  mockUser5,
  mockUser4,
  mockUser3,
];

export const mockUserTree: UserWithChildren[] = [
  {
    ...mockUser1,
    children: [
      {
        ...mockUser2,
        children: [],
      },
      {
        ...mockUser3,
        children: [
          {
            ...mockUser4,
            children: [],
          },
          {
            ...mockUser5,
            children: [],
          },
        ],
      },
      {
        ...mockUser6,
        children: [],
      },
    ],
  },
  {
    ...mockUser7,
    children: [],
  },
];
