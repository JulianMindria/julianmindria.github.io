import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app relative flex min-h-screen flex-col bg-[var(--bg)] text-[var(--fg)] antialiased">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.32),transparent_55%)] opacity-70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.38),transparent_60%)] opacity-60 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.22),transparent_65%)] opacity-40 blur-[140px]" />
        <div className="absolute inset-x-0 top-1/3 h-[48rem] -translate-y-1/2 bg-grid-fade [background-size:160px_160px] opacity-25" />
      </div>

      <Navbar />

      <main className="container relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-xl space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
                  404
                </span>
                <h1 className="text-2xl font-display font-semibold">This waypoint doesn&apos;t exist</h1>
                <p className="text-sm text-[var(--muted)]">
                  Let&apos;s get you back to the launchpad.
                </p>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
                  to="/"
                >
                  Return home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
