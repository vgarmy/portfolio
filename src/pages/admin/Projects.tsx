import { useEffect, useState } from "react";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

type Project = {
    id: number;
    slug: string;
    title: string;
    short_description: string;
    description: string;
    image: string;
    technologies: string;
    featured: number;
    created_at: string;
};

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
                setError("Could not load projects.");
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    if (loading) {
        return (
            <div>
                <h1 className="text-3xl font-bold">
                    Projects
                </h1>
                <p className="mt-3 text-slate-600">
                    Loading projects...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1 className="text-3xl font-bold">
                    Projects
                </h1>
                <p className="mt-3 text-red-600">
                    {error}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Projects
                    </h1>
                    <p className="mt-3 text-slate-600">
                        Manage your portfolio projects.
                    </p>
                </div>

                <a
                    href="/portfolio/admin/projects/new"
                    className="rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
                >
                    Add project
                </a>
            </div>

            <div className="mt-8 space-y-4">
                {projects.length === 0 ? (
                    <div className="rounded-xl border bg-white p-6">
                        <p className="text-slate-600">
                            No projects found.
                        </p>
                    </div>
                ) : (
                    projects.map(project => (
                        <div
                            key={project.id}
                            className="rounded-xl border bg-white p-6"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {project.title}
                                    </h2>

                                    <p className="mt-2 text-slate-600">
                                        {project.short_description}
                                    </p>

                                    <p className="mt-3 text-sm text-slate-400">
                                        /{project.slug}
                                    </p>
                                </div>

                                {project.featured === 1 && (
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 flex gap-2">
                                {JSON.parse(project.technologies || "[]").map(
                                    (technology: string) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                                        >
                                            {technology}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;