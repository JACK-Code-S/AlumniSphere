import { MainLayout } from "@/components/main-layout";
import { MessagesPage } from "@/components/messages-page";

export default function Messages({ params }) {
  const { role } = params;

  return (
    <MainLayout userRole={role}>
      <MessagesPage userRole={role} />
    </MainLayout>
  );
}
