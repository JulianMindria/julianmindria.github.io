import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 pb-4 pt-6">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between overflow-hidden rounded-full border border-white/10 bg-[rgba(9,16,31,0.72)] px-4 shadow-inner-glow backdrop-blur-md sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -left-6 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[rgba(56,189,248,0.32)] blur-2xl" />
            <div className="absolute right-2 top-0 h-16 w-24 rounded-full bg-[rgba(99,102,241,0.28)] blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
          </div>

          <Link to="/" className="relative flex items-center gap-3 text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[rgba(15,23,42,0.65)] text-sm font-semibold text-sky-100 shadow-[0_18px_45px_rgba(56,189,248,0.22)]">
              JM
            </span>
            <div className="leading-tight">
              <span className="block text-xs uppercase tracking-[0.38em] text-[var(--muted)]">Mindria Labs</span>
              <strong className="text-sm font-display text-slate-50">Julian Mindria</strong>
            </div>
          </Link>

          <nav className="relative hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative px-1 py-1 font-medium transition",
                    isActive
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-gradient-to-r after:from-[var(--brand)] after:to-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="mailto:hey@mindria.dev"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:border-[var(--ring)] hover:bg-white/20"
            >
              Say hi
            </a>
          </nav>

          <div className="relative md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
