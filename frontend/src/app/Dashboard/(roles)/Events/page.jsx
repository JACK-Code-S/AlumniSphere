import { MainLayout } from "@/components/main-layout";
import { EventsPage } from "@/components/events-page";

export default function Events({ params }) {
  const { role } = params;

  return (
    <MainLayout userRole={role}>
      <EventsPage userRole={role} />
    </MainLayout>
  );
}
