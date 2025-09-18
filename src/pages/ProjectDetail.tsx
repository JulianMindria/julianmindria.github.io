import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../siteData";
import { projectDetails } from "../projectDetails";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!slug) {
    return <MissingProject />;
  }

  const summary = projects.find((project) => project.slug === slug);
  const detail = projectDetails[slug];

  if (!summary || !detail) {
    return <MissingProject />;
  }

  const { heroImage, tagline, summary: paragraphs, context, problem, solution, highlights, metrics, links } = detail;
  const related = projects.filter((project) => project.slug !== slug).slice(0, 3);

  return (
    <article className="space-y-16">
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.78)] px-6 py-10 shadow-[0_32px_90px_rgba(8,15,27,0.55)] backdrop-blur md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[rgba(99,102,241,0.22)] blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[rgba(56,189,248,0.25)] blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-6">
            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] transition hover:border-white/20 hover:text-white"
            >
              <span aria-hidden>{"<"}</span>
              Back to projects
            </Link>

            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.42em] text-[var(--muted)]">Case Study</p>
              <h1 className="text-3xl font-display font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {summary.title}
              </h1>
              <p className="text-sm text-[var(--muted)] sm:text-base">{tagline}</p>
            </div>

            <div className="space-y-4 text-sm text-[var(--muted)] sm:text-base">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {links.map(({ label, href, external }) => {
                  const disabled = !href || href === "#";

                  if (disabled) {
                    return (
                      <span
                        key={label}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[var(--muted)]"
                      >
                        {label}
                      </span>
                    );
                  }

                  return external ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      key={label}
                      to={href}
                      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="relative flex max-w-sm flex-1 flex-col gap-6 lg:max-w-md">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={heroImage?.src ?? summary.imageSrc}
                alt={heroImage?.alt ?? summary.imageAlt ?? summary.title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <dl className="grid gap-3 rounded-3xl border border-white/10 bg-[rgba(12,19,35,0.72)] p-6 text-sm text-[var(--muted)]">
              <div className="flex items-start justify-between gap-3">
                <dt className="uppercase tracking-[0.32em] text-[10px] text-[var(--muted)]">Timeline</dt>
                <dd className="text-right text-white">{context.timeline}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="uppercase tracking-[0.32em] text-[10px] text-[var(--muted)]">Status</dt>
                <dd className="text-right text-white">{context.status}</dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="uppercase tracking-[0.32em] text-[10px] text-[var(--muted)]">Role</dt>
                <dd className="text-right text-white">{context.role}</dd>
              </div>
              {context.client && (
                <div className="flex items-start justify-between gap-3">
                  <dt className="uppercase tracking-[0.32em] text-[10px] text-[var(--muted)]">Client</dt>
                  <dd className="text-right text-white">{context.client}</dd>
                </div>
              )}
              <div>
                <dt className="uppercase tracking-[0.32em] text-[10px] text-[var(--muted)]">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
                  {context.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {metrics && metrics.length > 0 && (
              <dl className="grid gap-4 rounded-3xl border border-[var(--ring)]/40 bg-white/5 p-6 text-center text-white">
                {metrics.map(({ label, value }) => (
                  <div key={label} className="space-y-1">
                    <dd className="text-2xl font-display">{value}</dd>
                    <dt className="text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">{label}</dt>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </header>

      <section className="grid gap-10 lg:grid-cols-[0.55fr,0.45fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-[rgba(12,19,35,0.72)] p-6 shadow-[0_28px_70px_rgba(8,15,27,0.45)]">
          <h2 className="text-lg font-display font-semibold text-white">Problem</h2>
          <p className="text-sm text-[var(--muted)] sm:text-base">{problem}</p>
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-white">Approach</h3>
            <ul className="space-y-3 text-sm text-[var(--muted)] sm:text-base">
              {solution.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[rgba(12,19,35,0.72)] p-6 shadow-[0_28px_70px_rgba(8,15,27,0.45)]">
            <h2 className="text-lg font-display font-semibold text-white">Highlights</h2>
            <div className="mt-4 space-y-4 text-sm text-[var(--muted)] sm:text-base">
              {highlights.map(({ title, description }) => (
                <div key={title}>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.38em] text-[var(--muted)]">More work</span>
              <h2 className="text-xl font-display font-semibold text-white">Related projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white">
              View all
              <span aria-hidden>{">"}</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function MissingProject() {
  return (
    <div className="mx-auto max-w-xl space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
        404
      </span>
      <h1 className="text-2xl font-display font-semibold">Project not found</h1>
      <p className="text-sm text-[var(--muted)]">We could not locate that case study. Try heading back to the project index.</p>
      <Link
        className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
        to="/projects"
      >
        Back to projects
      </Link>
    </div>
  );
}
