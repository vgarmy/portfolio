import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="group flex items-center gap-2"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950 transition duration-300 group-hover:rotate-6 group-hover:bg-indigo-400">
                        VG
                    </span>

                    <div className="hidden sm:block">
                        <span className="font-bold tracking-tight text-white">
                            Vladimir
                        </span>

                        <span className="ml-1 text-slate-500">
                            Gatara
                        </span>
                    </div>
                </Link>

                {/* Navigation + Social */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-1">
                        {links.map(link => {
                            const isActive =
                                location.pathname === link.path ||
                                (link.path !== "/" &&
                                    location.pathname.startsWith(link.path));

                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-white text-slate-950 shadow-lg"
                                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Social links */}
                    <div className="hidden items-center gap-1 border-l border-slate-800 pl-3 sm:flex">
                        {/* GitHub */}
                        <a
                            href="https://github.com/vgarmy"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.74-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 8.15c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                                />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/vladimir-gatara-653a6384/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:bg-slate-800 hover:text-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;