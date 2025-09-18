import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { projects } from "../siteData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const focus = searchParams.get("focus");

  const focusProject = useMemo(
    () => projects.find((project) => project.slug === focus),
    [focus],
  );

  return (
    <section className="space-y-12">
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.78)] px-6 py-10 shadow-[0_32px_90px_rgba(8,15,27,0.55)] backdrop-blur md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[rgba(99,102,241,0.32)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[rgba(56,189,248,0.25)] blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        <div className="relative space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
            Build Log
          </span>
          <h1 className="text-4xl font-display font-semibold tracking-tight text-white sm:text-[2.75rem]">
            Projects crafted with intent
          </h1>
          <p className="max-w-2xl text-sm text-[var(--muted)] sm:text-base">
            A curated mix of experiments, production apps, and productized tooling. Filter with
            <code className="mx-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-[var(--muted)]">
              ?focus=&lt;slug&gt;
            </code>
            to highlight one in the grid below.
          </p>

          {focusProject && (
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--ring)] bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-white">
              Focused: {focusProject.title}
            </div>
          )}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const isFocused = project.slug === focus;
          const articleClasses = [
            "transition duration-300",
            isFocused
              ? "scale-[1.02] drop-shadow-[0_28px_90px_rgba(99,102,241,0.35)]"
              : "opacity-90 hover:opacity-100",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article key={project.slug} id={project.slug} className={articleClasses}>
              <ProjectCard {...project} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
