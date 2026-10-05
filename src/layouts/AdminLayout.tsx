import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";


function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <AdminHeader />

      <div className="mx-auto flex max-w-7xl">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;