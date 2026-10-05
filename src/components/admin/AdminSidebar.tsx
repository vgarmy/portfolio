import { NavLink } from "react-router-dom";

function AdminSidebar() {
    return (
        <aside className="w-64 border-r bg-white p-6">

            <nav className="space-y-2">

                <NavLink
                    to="/admin"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/projects"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/admin/about"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    About
                </NavLink>

                <NavLink
                    to="/admin/skills"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Skills
                </NavLink>

                <NavLink
                    to="/admin/settings"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Settings
                </NavLink>

                <NavLink
                    to="/admin/projects/new"
                    className="block rounded-lg px-4 py-2 hover:bg-slate-100"
                >
                    Add Project
                </NavLink>

            </nav>
        </aside>
    );
}

export default AdminSidebar;