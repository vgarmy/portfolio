import { ArrowUpRight, Code2, Palette } from "lucide-react";
import { Link } from "react-router-dom";

function AboutPreview() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
                    {/* Main content */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                            About me
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Frontend Developer
                            <span className="block text-slate-500">
                                with strong UX experience.
                            </span>
                        </h2>

                        <div className="mt-6 max-w-2xl space-y-4">
                            <p className="text-lg leading-8 text-slate-400">
                                With 8+ years of experience in frontend
                                development, I build modern web applications
                                with React and TypeScript.
                            </p>

                            <p className="leading-7 text-slate-500">
                                My background in UX helps me create interfaces
                                that are not only technically solid, but also
                                clear, intuitive and easy to use.
                            </p>
                        </div>

                        <Link
                            to="/about"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            More about me
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    {/* Focus cards */}
                    <div className="grid gap-4">
                        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:border-indigo-500/30">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                <Code2 size={21} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                Frontend Development
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                React, TypeScript and modern frontend
                                architecture with a focus on clean,
                                maintainable and responsive applications.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:border-violet-500/30">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                                <Palette size={21} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-white">
                                UX as a Strength
                            </h3>

                            <p className="mt-3 leading-7 text-slate-500">
                                UX experience that helps me turn requirements
                                into clear, intuitive and user-friendly
                                interfaces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPreview;