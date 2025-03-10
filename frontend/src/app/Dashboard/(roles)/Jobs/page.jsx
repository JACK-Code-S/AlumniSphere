import { MainLayout } from "@/components/main-layout";
import { JobsPage } from "@/components/jobs-page";

export default function Jobs({ params }) {
  const { role } = params;

  return (
    <MainLayout userRole={role}>
      <JobsPage userRole={role} />
    </MainLayout>
  );
}
