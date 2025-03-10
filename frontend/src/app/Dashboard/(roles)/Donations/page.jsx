import { MainLayout } from "@/components/main-layout";
import { DonationsPage } from "@/components/donations-page";

export default function Donations({ params }) {
  const { role } = params;

  return (
    <MainLayout userRole={role}>
      <DonationsPage userRole={role} />
    </MainLayout>
  );
}
