import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import type { Project } from "../../types/project";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

function ProjectDetails() {
    const { slug } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Could not load projects");
                }

                const projects: Project[] = await response.json();

                const foundProject = projects.find(
                    project => project.slug === slug
                );

                setProject(foundProject || null);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadProject();
    }, [slug]);

    if (loading) {
        return (
            <section className="mx-auto max-w-6xl px-4 py-20">
                <p className="text-slate-400">
                    Loading project...
                </p>
            </section>
        );
    }

    if (!project) {
        return (
            <section className="mx-auto max-w-6xl px-4 py-20">
                <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Project not found
                    </h1>

                    <p className="mt-4 text-slate-400">
                        The project you are looking for does not exist.
                    </p>

                    <Link
                        to="/projects"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        <ArrowLeft size={18} />
                        Back to projects
                    </Link>
                </div>
            </section>
        );
    }

    const features = JSON.parse(project.features || "[]");
    const technologies = JSON.parse(project.technologies || "[]");

    return (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Back link */}
                <Link
                    to="/projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
                >
                    <ArrowLeft size={17} />
                    Back to projects
                </Link>

                {/* Hero */}
                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                    {project.image && (
                        <div className="relative h-72 overflow-hidden md:h-[500px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="block h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10">
                                <div className="mb-4 flex flex-wrap gap-3">
                                    <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                        {project.type}
                                    </span>

                                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                                        {project.status}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                                    {project.title}
                                </h1>
                            </div>
                        </div>
                    )}

                    <div className="p-8 md:p-10">
                        <p className="max-w-3xl text-xl leading-8 text-slate-300">
                            {project.short_description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                                >
                                    <GitBranch size={18} />
                                    GitHub
                                    <ArrowUpRight size={16} />
                                </a>
                            )}

                            {project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-12 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                            Overview
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            About the project
                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            {project.description}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                            Stack
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            Technologies
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {technologies.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                            The challenge
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            Challenge
                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            {project.challenge}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                            The approach
                        </p>

                        <h2 className="text-3xl font-bold text-white">
                            Solution
                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        Functionality
                    </p>

                    <h2 className="text-3xl font-bold text-white">
                        Key features
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {features.map((feature: string) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
                            >
                                <CheckCircle2
                                    size={20}
                                    className="shrink-0 text-emerald-400"
                                />

                                <span className="text-slate-300">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-500/10 via-slate-950 to-violet-500/10 p-8 md:p-10">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                                Interested?
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-white">
                                Explore the project
                            </h2>

                            <p className="mt-3 max-w-xl text-slate-400">
                                View the source code or try the live version of this project.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                                >
                                    <GitBranch size={18} />
                                    View code
                                </a>
                            )}

                            {project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
                                >
                                    Live demo
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;