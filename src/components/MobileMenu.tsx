import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-white transition hover:border-[var(--ring)] hover:bg-white/20"
      >
        Menu
        <span aria-hidden className="text-xs text-white/60">{'>'}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-end bg-black/50 backdrop-blur" onClick={() => setOpen(false)}>
          <div
            onClick={(event) => event.stopPropagation()}
            className="m-4 w-[88vw] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.95)] shadow-[0_28px_90px_rgba(7,12,23,0.65)]"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
              <strong className="text-sm text-white">Navigate</strong>
              <button
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-[var(--muted)] hover:border-[var(--ring)] hover:text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base text-[var(--muted)] transition hover:border-[var(--ring)] hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                  <span className="text-xs text-white/40 transition group-hover:text-white">{'>'}</span>
                </Link>
              ))}
              <a
                href="mailto:mindriajulian@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--ring)] hover:bg-white/20"
              >
                Say hi
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
