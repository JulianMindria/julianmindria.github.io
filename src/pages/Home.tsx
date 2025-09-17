import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import TechMarquee from "./TechMarquee";
import { projects } from "../siteData";
import React from "react";

// tiny inline icons (no packages)
const IconTarget = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 6v3m0 6v3m6-6h-3M9 12H6m12 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconBolt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M14 4c3 0 6 3 6 6-4 1-7 4-8 8-3 0-6-3-6-6 4-1 7-4 8-8Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 16c-2 0-4 2-4 4 2 0 4-2 4-4Zm8-8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const IconShip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 15v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-2M4 15l3-8h10l3 8M4 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconInbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 13h4l2 3h6l2-3h4M6 6h12l3 7v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5l3-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const heroMetrics = [
  { value: "12+", label: "Production installs" },
  { value: "4", label: "Active products" },
  { value: "72 hr", label: "Fastest concept to ship" },
  { value: "0", label: "Unanswered emails" },
] as const;

const nowShipping = [
  "Beacon – service runner & scheduler",
  "OnlyLink – whitelist‑first browser",
  "ProxyDoc – API docs from real traffic",
] as const;

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <li
      className="group relative isolate min-w-[11rem] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4 backdrop-blur text-left shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_20px_60px_rgba(8,15,27,0.35)]"
    >
      {/* subtle inner sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
      <dt className="relative z-[1] text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
        {label}
      </dt>
      <dd className="relative z-[1] mt-1 text-2xl font-display text-white">{value}</dd>
    </li>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-16 lg:space-y-20">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.78)] px-6 py-10 shadow-[0_40px_120px_rgba(8,15,27,0.55)] backdrop-blur md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-10 h-56 w-56 rounded-full bg-[rgba(56,189,248,0.32)] blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[rgba(99,102,241,0.42)] blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[0.7fr,0.3fr]">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand)]" />
              Build Log
            </span>

            <h1
              className="text-balance text-4xl font-display font-semibold leading-tight text-white sm:text-5xl"
              style={{ textWrap: "balance" as any }}
            >
              Crafting
              <span className="mx-1 inline-flex bg-gradient-to-r from-[var(--brand)] via-cyan-300 to-[var(--accent)] bg-clip-text text-transparent">
                focus‑protecting tools
              </span>
              for builders who ship on signal, not noise.
            </h1>

            <p className="max-w-2xl text-sm text-[var(--muted)] sm:text-base" style={{ textWrap: "balance" as any }}>
              Mindria Labs is a small studio by Julian Mindria. We turn recurring operational pain into pragmatic software—dashboards that whisper exactly what changed, scheduling that works, and browsers that guard your attention.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-6 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                Explore projects
                <span aria-hidden className="text-base">{">"}</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm text-white transition hover:border-[var(--ring)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                Get in touch
              </Link>
            </div>

            {/* Stats: horizontally scrollable on small, evenly spaced on lg */}
            <dl className="not-prose mt-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <ul className="grid auto-cols-[minmax(11rem,1fr)] grid-flow-col gap-3 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 lg:grid-cols-4">
                {heroMetrics.map((m) => (
                  <StatPill key={m.label} value={m.value} label={m.label} />
                ))}
              </ul>
            </dl>
          </div>

          {/* Right: shipping card */}
          <aside className="relative">
            <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.08] to-white/5 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.65)]">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <h2 className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">Currently shipping</h2>

              <ul className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                {nowShipping.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--accent)] ring-2 ring-white/10" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-[rgba(8,15,27,0.55)] p-4">
                <p className="text-sm text-[var(--muted)]">
                  From factory floors to focused OS layers, we design for clarity, resilience, and speed.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </header>

      {/* TRUST / STACK STRIP */}
      <div className="rounded-3xl border border-white/10 bg-[rgba(12,19,35,0.78)] p-5 shadow-[0_24px_70px_rgba(8,15,27,0.45)]">
        <div className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.42em] text-[var(--muted)]">Tooling we lean on</div>
        <TechMarquee />
      </div>

      {/* VALUE PILLARS */}
      <section id="about" className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Principles",
            copy: "Clarity over cleverness. Ship, learn, iterate. Protect attention. Make it fast and reliable.",
            Icon: IconTarget,
          },
          {
            title: "What we build",
            copy: "Real‑time manufacturing dashboards (Laravel + Reverb + Timescale), desktop tooling (Go/Tauri), and focused mobile apps.",
            Icon: IconBolt,
          },
          {
            title: "Now",
            copy: "Beacon (runner + scheduler), OnlyLink (distraction‑free browser), and ProxyDoc (automatic API docs).",
            Icon: IconRocket,
          },
        ].map(({ title, copy, Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(11,21,37,0.7)] p-6 transition duration-300 hover:border-[var(--ring)] hover:bg-[rgba(22,33,57,0.85)]"
          >
            <div className="pointer-events-none absolute -top-14 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[rgba(99,102,241,0.32)] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand)]/40 via-transparent to-[var(--accent)]/40 text-[var(--brand)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-display font-semibold text-white">{title}</h3>
            </div>
            <p className="relative mt-3 text-sm text-[var(--muted)]">{copy}</p>
          </div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.38em] text-[var(--muted)]">Case studies</span>
            <h2 className="text-xl font-display font-semibold text-white">Featured launches</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white">
            See all projects
            <span aria-hidden>{">"}</span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article key={p.slug} className="motion-safe:transition-transform motion-safe:hover:-translate-y-1">
              <ProjectCard {...p} />
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
