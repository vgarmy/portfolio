import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto flex min-h-[calc(100vh-300px)] max-w-6xl items-center">
                <div className="max-w-4xl">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Vladimir
                        </span>
                    </h1>

                    <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-4xl">
                        Frontend Developer
                    </h2>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                        I build modern, responsive web applications with React
                        and TypeScript, backed by strong UX experience and a
                        focus on clean, intuitive and maintainable frontend
                        solutions.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-200"
                        >
                            View my work
                            <ArrowUpRight size={18} />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-slate-500 hover:bg-slate-800"
                        >
                            Get in touch
                        </Link>
                    </div>

                    <div className="mt-20 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 md:flex">
                        <ArrowDown size={16} />
                        Scroll to explore
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;