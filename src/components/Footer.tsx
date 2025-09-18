export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.78)] px-6 py-8 text-sm text-[var(--muted)] shadow-[0_20px_70px_rgba(8,15,27,0.45)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute -bottom-16 right-12 h-32 w-32 rounded-full bg-[rgba(56,189,248,0.22)] blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center sm:text-left">
              (c) {year} Julian Mindria - Mindria Labs. Crafted with focus.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/#about" className="text-[var(--muted)] transition hover:text-white">
                About
              </a>
              <a href="/#stack" className="text-[var(--muted)] transition hover:text-white">
                Stack
              </a>
              <a href="mailto:hey@mindria.dev" className="text-[var(--muted)] transition hover:text-white">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
