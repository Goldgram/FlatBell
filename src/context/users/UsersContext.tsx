import { createContext, useContext } from "react";
import type { User, UserWithChildren } from "../../types/user";

export interface UsersContextType {
  isLoadingUsers: boolean;
  users: User[];
  userTree: UserWithChildren[];
}

export const DEFAULT_USERS_CONTEXT = {
  isLoadingUsers: false,
  users: [],
  userTree: [],
};

export const UsersContext = createContext<UsersContextType>(
  DEFAULT_USERS_CONTEXT
);

export const useUsersContext = () => {
  return useContext(UsersContext);
};
