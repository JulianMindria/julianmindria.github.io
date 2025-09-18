import React from "react";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  MapPin,
  Target,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

type Touchpoint = {
  label: string;
  value: string;
  href?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
  copyable?: boolean;
};

const touchpoints: Touchpoint[] = [
  {
    label: "Email",
    value: "mindriajulian@gmail.com",
    href: "mailto:mindriajulian@gmail.com",
    icon: Mail,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/julianmindria",
    href: "https://www.linkedin.com/in/julianmindria",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Instagram",
    value: "@mindrialabs",
    href: "https://www.instagram.com/mindrialabs",
    icon: Instagram,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/JulianMindria",
    href: "https://github.com/JulianMindria",
    icon: Github,
    external: true,
  },
  { label: "Location", value: "Jakarta, Indonesia (WIB)", icon: MapPin },
  { label: "Focus", value: "Real-time systems, dashboards, devtools", icon: Target },
];

// Portrait (swap src if you have a headshot)
const contactPortrait = {
  src: "/img/julian.jpg",
  alt: "Julian Mindria",
  initials: "JM",
};

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  const hasPortrait = Boolean(contactPortrait.src);

  return (
    <section className="space-y-12">
      {/* Hero */}
      <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(9,17,31,0.78)] px-6 py-8 shadow-[0_28px_90px_rgba(8,15,27,0.55)] backdrop-blur md:px-9 md:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-6 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.25)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[rgba(99,102,241,0.3)] blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.38em] text-[var(--muted)]">
              Contact
            </span>
            <h1 className="text-3xl font-display font-semibold text-white sm:text-4xl">
              Drop a line. Let's build something purposeful.
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-[var(--muted)] sm:text-[15px] lg:mx-0">
              For collaborations, consulting, or demos, share a few lines about the problem space. I usually reply within a day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                href="mailto:hey@mindria.dev?subject=Mindria%20Labs%20Project"
              >
                Start email
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Monday - Friday, 09:00 - 17:00 WIB
              </div>
            </div>
          </div>

          {/* Portrait */}
          <figure className="relative flex h-48 w-48 flex-none items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(8,15,27,0.45)] sm:h-56 sm:w-56 md:h-60 md:w-60">
            {hasPortrait ? (
              <img
                src={contactPortrait.src}
                alt={contactPortrait.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,rgba(56,189,248,0.25),rgba(99,102,241,0.35))] text-3xl font-semibold text-white/80">
                {contactPortrait.initials}
              </div>
            )}
            <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10 mix-blend-lighten" />
          </figure>
        </div>
      </header>

      {/* Details section (single column, full width) */}
      <div className="grid gap-6">
        <div className="rounded-3xl border border-white/10 bg-[rgba(11,21,37,0.78)] p-5 md:p-6">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
            Details
          </h2>

          {/* Two-column rows on sm+ */}
          <ul className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-6">
            {touchpoints.map((item) => {
              const Icon = item.icon;
              const row = (
                <div className="flex items-center gap-3">
                  {Icon ? (
                    <Icon aria-hidden className="h-4 w-4 shrink-0 text-white/60" />
                  ) : (
                    <span className="inline-block h-4 w-4 shrink-0 rounded-full bg-white/20" />
                  )}
                  <div className="min-w-0 flex-1 leading-tight">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-white/70">
                      {item.label}
                    </span>
                    <span className="block truncate text-[15px] text-white/90">
                      {item.value}
                    </span>
                  </div>
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        copy(item.value);
                      }}
                      className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10"
                      aria-label="Copy email"
                      title={copied ? "Copied" : "Copy"}
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  )}
                  {item.external && (
                    <ExternalLink
                      className="ml-1 hidden h-3.5 w-3.5 text-white/50 sm:block"
                      aria-hidden
                    />
                  )}
                </div>
              );

              return (
                <li key={`${item.label}-${item.value}`}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group block -m-1 rounded-xl border border-transparent p-2 transition hover:border-white/10 hover:bg-white/5 md:p-2.5"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {row}
                    </a>
                  ) : (
                    <div className="rounded-xl p-2 md:p-2.5">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-3xl border border-dashed border-white/10 bg-[rgba(8,15,27,0.6)] p-5 text-sm text-[var(--muted)]">
          Prefer async? Share a Loom, repo, or dashboard access and I'll send back a structured teardown with next steps.
        </div>
      </div>
    </section>
  );
}
