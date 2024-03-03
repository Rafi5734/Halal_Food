import AdminDashboard from "@/components/admin/adminDashboard/AdminDashboard";

export default function AdminLayout({ children }) {
  return (
    <section className="flex">
      <AdminDashboard />

      {children}
    </section>
  );
}
