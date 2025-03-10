import { redirect } from "next/navigation";
import { MainLayout } from "@/components/main-layout";
import { AlumniDashboard } from "@/components/alumni-dashboard";
import { AdminDashboard } from "@/components/admin-dashboard";
import { StudentDashboard } from "@/components/student-dashboard";

export default function DashboardPage({ params }) {
  const { role } = params;

  // Validate role
  if (!["alumni", "admin", "student"].includes(role)) {
    redirect("/");
  }

  return (
    <MainLayout userRole={role}>
      {role === "alumni" && <AlumniDashboard />}
      {role === "admin" && <AdminDashboard />}
      {role === "student" && <StudentDashboard />}
    </MainLayout>
  );
}
