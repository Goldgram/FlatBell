import { PageHeader, PageLayout } from "../components/PageLayout";

export const ErrorPage = () => {
  return (
    <PageLayout>
      <PageHeader title="Oopse!" />
      <p>Something went wrong, please try again later.</p>
    </PageLayout>
  );
};
