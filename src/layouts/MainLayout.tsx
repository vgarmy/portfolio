import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            {/* Background glow */}
            <div className="pointer-events-none fixed -left-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="pointer-events-none fixed -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="pointer-events-none fixed bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

            {/* Subtle grid */}
            <div
                className="pointer-events-none fixed inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }}
            />

            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />

                <main className="flex-1">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;