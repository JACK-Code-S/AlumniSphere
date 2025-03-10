import { MainLayout } from "@/components/main-layout";
import { MentorshipPage } from "@/components/mentorship-page";

export default function Mentorship({ params }) {
  const { role } = params;

  return (
    <MainLayout userRole={role}>
      <MentorshipPage userRole={role} />
    </MainLayout>
  );
}
