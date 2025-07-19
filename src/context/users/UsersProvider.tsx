import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../functions/api";
import { createUserTree } from "../../functions/user";
import { UsersContext, type UsersContextType } from "./UsersContext";

export const UsersProvider = ({ children }: React.PropsWithChildren) => {
  const {
    isPending,
    isError,
    data: users = [],
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });

  const value: UsersContextType = useMemo(() => {
    return {
      isLoading: isPending,
      isError,
      users,
      userTree: createUserTree(users),
    };
  }, [isPending, isError, users]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
