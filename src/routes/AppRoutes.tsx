import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Projects from "../pages/public/Projects";
import Contact from "../pages/public/Contact";
import ProjectDetails from "../pages/public/ProjectDetails";

import Dashboard from "../pages/admin/Dashboard";
import AdminProjects from "../pages/admin/Projects";
import AddProject from "../pages/admin/AddProject";
import EditProject from "../pages/admin/EditProject";
import AdminAbout from "../pages/admin/About";
import AdminSkills from "../pages/admin/Skills";
import Settings from "../pages/admin/Settings";
import AdminLayout from "../layouts/AdminLayout";

function AppRoutes() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetails />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                {/* Admin */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />

                    <Route
                        path="projects"
                        element={<AdminProjects />}
                    />

                    <Route
                        path="projects/new"
                        element={<AddProject />}
                    />

                    <Route
                        path="projects/:id/edit"
                        element={<EditProject />}
                    />

                    <Route
                        path="about"
                        element={<AdminAbout />}
                    />

                    <Route
                        path="skills"
                        element={<AdminSkills />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;