import { useMemo } from "react";
import { Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../functions/api";
import { UsersContext, type UsersContextType } from "./UsersContext";

export const UsersProvider = ({ children }: React.PropsWithChildren) => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });

  console.log("user data", data);

  const value: UsersContextType = useMemo(() => {
    return {
      isLoadingUsers: isPending,
      users: [],
      userTree: [],
    };
  }, [isPending]);

  if (isError) {
    return <Navigate to="/error" />;
  }

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
