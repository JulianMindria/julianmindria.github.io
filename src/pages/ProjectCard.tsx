export type Project = {
  title: string;
  slug: string;
  blurb: string;
  tags: ReadonlyArray<string>;
  href?: string;
};

export default function ProjectCard({ title, blurb, tags, href }: Project) {
  const isExternal = Boolean(href && href !== "#");

  return (
    <a
      href={href ?? "#"}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[rgba(8,15,27,0.78)] p-6 shadow-[0_28px_80px_rgba(8,15,27,0.55)] transition duration-300 hover:-translate-y-1 hover:border-[var(--ring)] hover:bg-[rgba(16,27,46,0.82)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(56,189,248,0.35)] blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-40 w-40 rounded-full bg-[rgba(99,102,241,0.35)] blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-lg font-display font-semibold tracking-tight text-white">{title}</h3>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] transition opacity-0 group-hover:opacity-100">
          Open
          <span aria-hidden>{'>'}</span>
        </span>
      </div>

      <p className="relative mt-3 text-sm text-[var(--muted)]">{blurb}</p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)] transition group-hover:border-white/20 group-hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.38em] text-[var(--muted)] opacity-0 transition group-hover:opacity-100">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        {isExternal ? "Launch" : "Peek"}
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </a>
  );
}
