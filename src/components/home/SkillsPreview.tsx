import {
    Code2,
    Braces,
    Palette,
    GitBranch,
    Layers3,
} from "lucide-react";

function SkillsPreview() {
    const frontendSkills = [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Next.js",
        "Vite",
    ];

    const tools = [
        "Git",
        "GitHub",
        "REST APIs",
        "Responsive Design",
        "Component Architecture",
    ];

    return (
        <section className="relative overflow-hidden px-4 py-20 md:py-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                        Skills & Technologies
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Building with modern
                        <span className="block text-slate-500">
                            frontend technologies.
                        </span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-400">
                        My main focus is building modern, responsive and
                        maintainable frontend applications with React and
                        TypeScript.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Frontend */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-indigo-500/30">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                <Code2 size={22} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    Frontend Development
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Core technologies
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {frontendSkills.map(skill => (
                                <span
                                    key={skill}
                                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-indigo-500/40 hover:bg-slate-800 hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & strengths */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:border-violet-500/30">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                                <Layers3 size={22} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    Tools & Expertise
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Supporting skills
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {tools.map(skill => (
                                <span
                                    key={skill}
                                    className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-violet-500/40 hover:bg-slate-800 hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom highlights */}
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                        <Braces
                            size={20}
                            className="text-indigo-400"
                        />

                        <p className="mt-3 font-semibold text-white">
                            Clean code
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Reusable components and maintainable architecture.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                        <Palette
                            size={20}
                            className="text-violet-400"
                        />

                        <p className="mt-3 font-semibold text-white">
                            UX-minded
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Strong UX background supporting frontend development.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                        <GitBranch
                            size={20}
                            className="text-cyan-400"
                        />

                        <p className="mt-3 font-semibold text-white">
                            Modern workflow
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Git, GitHub and AI-assisted development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsPreview;