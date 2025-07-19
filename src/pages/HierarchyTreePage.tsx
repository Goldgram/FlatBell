import { Navigate } from "react-router";
import { HierarchyTreeItem } from "../components/HierarchyTreeItem";
import { PageHeader, PageLayout } from "../components/PageLayout";
import { useAuthContext } from "../context/auth/AuthContext";
import { useUsersContext } from "../context/users/UsersContext";
import { getFullUserName } from "../functions/user";

export const HierarchyTreePage = () => {
  const { logout, userId } = useAuthContext();
  const { isLoading, isError, users, userTree } = useUsersContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const loggedInUser = users.find((user) => user.id === userId);
  if (isError || !loggedInUser) {
    return <Navigate to="/error" />;
  }

  return (
    <PageLayout>
      <PageHeader title="Hierarchy Tree">
        <p>
          {getFullUserName(loggedInUser)} (
          <button
            className="inline cursor-pointer underline"
            style={{ color: "#0900f8" }}
            onClick={logout}
          >
            Logout
          </button>
          )
        </p>
      </PageHeader>
      {!userTree.length ? (
        <p>No user data created.</p>
      ) : (
        <div className="mx-16">
          {userTree?.map((user) => {
            return <HierarchyTreeItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </PageLayout>
  );
};
