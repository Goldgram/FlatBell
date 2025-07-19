import { useAuthContext } from "../context/auth/AuthContext";

export const HierarchyTreePage = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      <p>Hierarchy Tree Page</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
