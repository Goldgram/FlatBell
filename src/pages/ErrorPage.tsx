import { useNavigate } from "react-router";
import { PageHeader, PageLayout } from "../components/PageLayout";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHeader title="Oopse!" />
      <p>Something went wrong, please try again later.</p>
      <button
        className="mt-4 px-12 text-white border border-black rounded-sm cursor-pointer"
        style={{ backgroundColor: "#7822b5" }}
        onClick={() => navigate("/login")}
      >
        Back to login page
      </button>
    </PageLayout>
  );
};
