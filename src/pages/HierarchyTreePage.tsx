import { Navigate } from "react-router";
import { HierarchyTreeItem } from "../components/HierarchyTreeItem";
import { PageHeader, PageLayout } from "../components/PageLayout";
import { useAuthContext } from "../context/auth/AuthContext";
import { useUsersContext } from "../context/users/UsersContext";

export const HierarchyTreePage = () => {
  const { logout, userId } = useAuthContext();
  const { isLoading, isError, users, userTree } = useUsersContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("user", userId, users);
  const fullUserName = "TO DO";
  // error if can't find logged in user

  if (isError) {
    return <Navigate to="/error" />;
  }

  return (
    <PageLayout>
      <PageHeader title="Hierarchy Tree">
        <p>
          {fullUserName} (
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

      {userTree.length ? (
        userTree?.map((user) => {
          return <HierarchyTreeItem key={user.id} user={user} />;
        })
      ) : (
        <p>No user data created.</p>
      )}
    </PageLayout>
  );
};
