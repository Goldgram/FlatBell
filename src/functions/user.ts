import type { User, UserWithChildren } from "../types/user";

export const getFullUserName = (user: User | undefined) => {
  if (!user) {
    return "Unknown";
  }
  const { firstName = "Mx", lastName = "" } = user;
  return `${firstName} ${lastName}`.trim();
};

export const createUserTree = (users: User[]): UserWithChildren[] => {
  const userTree: UserWithChildren[] = [];

  const userMap: Record<string, UserWithChildren> = users
    .sort(sortUsersAlphabetically)
    .reduce((acc, user) => {
      return {
        ...acc,
        [user.id]: {
          ...user,
          children: [],
        },
      };
    }, {});

  users.forEach(({ id, managerId }) => {
    if (!managerId) {
      userTree.push(userMap[id]);
    } else {
      userMap[managerId].children.push(userMap[id]);
    }
  });

  return userTree;
};

const sortUsersAlphabetically = (a: User, b: User) => {
  return a.firstName.localeCompare(b.firstName);
};
