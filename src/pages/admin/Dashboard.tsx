import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../../components/admin/DashboardCard";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

type Project = {
    id: number;
    title: string;
    slug: string;
    created_at: string;
};

function Dashboard() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProjects() {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Could not load projects");
                }

                const data = await response.json();

                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mt-3 text-slate-600">
                Overview of your portfolio content.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <DashboardCard
                    title="Projects"
                    value={loading ? "..." : String(projects.length)}
                />

                <DashboardCard
                    title="Skills"
                    value="12"
                />

                <DashboardCard
                    title="Technologies"
                    value="8"
                />
            </div>

            <section className="mt-10 rounded-xl border bg-white p-6">
                <h2 className="text-xl font-bold">
                    Recent Projects
                </h2>

                <div className="mt-6 space-y-4">
                    {loading ? (
                        <p className="text-slate-500">
                            Loading projects...
                        </p>
                    ) : projects.length === 0 ? (
                        <p className="text-slate-500">
                            No projects found.
                        </p>
                    ) : (
                        projects.slice(0, 5).map(project => (
                            <div
                                key={project.id}
                                className="flex justify-between border-b pb-4"
                            >
                                <span>
                                    {project.title}
                                </span>

                                <Link
                                    to={`/admin/projects/${project.id}/edit`}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Edit
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}

export default Dashboard;