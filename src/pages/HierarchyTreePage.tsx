import { PageHeader, PageLayout } from "../components/PageLayout";
import { useAuthContext } from "../context/auth/AuthContext";

export const HierarchyTreePage = () => {
  const { logout } = useAuthContext();
  return (
    <PageLayout>
      <PageHeader title="Hierarchy Tree">
        <button onClick={logout}>Logout</button>
      </PageHeader>
      content
    </PageLayout>
  );
};
