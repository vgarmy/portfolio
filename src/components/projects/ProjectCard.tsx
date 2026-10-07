import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    const technologies = JSON.parse(project.technologies || "[]");

    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-lg transition-all duration-500 hover:border-slate-700 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]">
            <Link
                to={`/projects/${project.slug}`}
                className="block"
            >
                <div className="relative h-80 overflow-hidden bg-slate-950">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="block h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            onError={e => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-slate-500">
                            No project image
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                    <div className="absolute left-6 top-6">
                        <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                            {project.type}
                        </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <div>
                            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                                Featured project
                            </p>

                            <h3 className="text-3xl font-bold tracking-tight text-white">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition-all duration-300 group-hover:rotate-45 group-hover:bg-slate-200">
                            <ArrowUpRight size={22} />
                        </div>
                    </div>
                </div>
            </Link>

            <div className="bg-slate-950 p-7">
                <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                        {project.status}
                    </span>

                    <span className="text-sm text-slate-500">
                        Frontend & UX
                    </span>
                </div>

                <p className="max-w-2xl leading-7 text-slate-400">
                    {project.short_description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-6">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-slate-300"
                    >
                        View case study
                        <ArrowUpRight size={16} />
                    </Link>

                    <div className="flex gap-2">
                        {project.github_url && (
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub repository"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                            >
                                <GitBranch size={17} />
                            </a>
                        )}

                        {project.live_url && (
                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Live demo"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-950 transition hover:bg-slate-200"
                            >
                                <ExternalLink size={17} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;