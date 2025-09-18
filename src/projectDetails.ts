export type ProjectDetail = {
  slug: string;
  tagline: string;
  summary: ReadonlyArray<string>;
  heroImage?: { src: string; alt: string };
  context: {
    client?: string;
    role: string;
    timeline: string;
    status: string;
    tech: ReadonlyArray<string>;
  };
  problem: string;
  solution: ReadonlyArray<string>;
  highlights: ReadonlyArray<{ title: string; description: string }>;
  metrics?: ReadonlyArray<{ label: string; value: string }>;
  links?: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
};

export const projectDetails: Record<string, ProjectDetail> = {
  onlylink: {
    slug: "onlylink",
    tagline: "Whitelist-first Android browser for focused browsing",
    summary: [
      "OnlyLink flips the mobile browsing story: instead of muting distractions after they appear, it only opens destinations you have explicitly approved.",
      "The app sits at the system share sheet, intercepts intents from any app, and enforces session rules so busy builders can keep their attention where it matters."
    ],
    heroImage: {
      src: "/img/OnlyLink.jpg",
      alt: "OnlyLink Android browser screenshot"
    },
    context: {
      role: "Product, Android engineering, visual design",
      timeline: "2024 to present",
      status: "Private beta on personal devices",
      tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager"]
    },
    problem: "Context switching to unplanned tabs eats deep-work blocks. Traditional blockers react after the fact, so you still lose momentum before the guardrails kick in.",
    solution: [
      "Allow-list core: the browser boots to a single input and a curated library of approved destinations. Unknown URLs are sandboxed in a preview card so you can review before launching.",
      "Session engine tracks time-boxed focus windows (15, 30, 60 minutes). When the timer expires, OnlyLink offers a summary of where you actually spent time and reminds you to log the session.",
      "Built as a single-activity Compose app with WorkManager jobs to rotate allow-lists based on calendar context."
    ],
    highlights: [
      {
        title: "Instant intent capture",
        description: "Integrates with Android's share target API so every new link routes through OnlyLink before hitting Chrome."
      },
      {
        title: "Zero-config onboarding",
        description: "Preloads starter libraries (docs, dashboards, knowledge bases) and lets you share curated bundles with teammates."
      },
      {
        title: "Lightweight analytics",
        description: "Records anonymous session metadata locally so you can audit how well the rules are working without shipping data to a server."
      }
    ],
    metrics: [
      { label: "Launch to first render", value: "< 180ms" },
      { label: "Battery impact", value: "< 0.2% per hour idle" }
    ],
    links: [
      { label: "Project website (coming soon)", href: "#" }
    ]
  },
  beacon: {
    slug: "beacon",
    tagline: "Desktop runner and scheduler for local services",
    summary: [
      "Beacon replaces the brittle shell scripts I used to juggle local queues, workers, and dashboards.",
      "It wraps each service in a tiny manifest so I can launch, group, and schedule them without remembering arcane CLI incantations."
    ],
    heroImage: {
      src: "/img/beacon.png",
      alt: "Beacon desktop app showing service list"
    },
    context: {
      role: "Product design, Go backend, Tauri frontend",
      timeline: "Q3 2024",
      status: "Internal tooling",
      tech: ["Go", "SQLite", "Tauri", "React"]
    },
    problem: "Microservice demo days meant re-running ten or more commands, each with custom environment variables. Forget one flag and the demo falls apart.",
    solution: [
      "Service manifests (YAML) declare commands, health checks, and environment blocks. Beacon renders them as toggles that remember state between reboots.",
      "Built scheduling primitives (cron plus ASAP) so I can keep long-running jobs warm without leaving terminals open.",
      "Implemented a Go worker that spawns processes with per-service log buffers streamed into the UI via Tauri IPC."
    ],
    highlights: [
      { title: "Cross-platform", description: "Runs the same way on macOS, Windows, and Linux because of Tauri's webview shell." },
      { title: "Log tailing", description: "Provides a multi-pane log viewer with filter and search so those panic lines never hide." },
      { title: "One-click stack warmup", description: "Start your queue, API, and UI with a single preset so onboarding new teammates takes minutes." }
    ],
    metrics: [
      { label: "Stack boot time", value: "3m to 40s" },
      { label: "Service manifests", value: "18 and counting" }
    ]
  },
  streaks: {
    slug: "streaks",
    tagline: "Habit tracker with Duolingo-style accountability",
    summary: [
      "Streaks trims habit tracking to the basics: daily commitments, a progress view that sparks action, and smart defaults for reminders.",
      "No social feed, no gamified coins, just tight UX that celebrates consistency."
    ],
    heroImage: {
      src: "/img/Streaks.jpg",
      alt: "Streaks habit tracking mobile app"
    },
    context: {
      role: "Product, Android development",
      timeline: "2023",
      status: "Play Store alpha",
      tech: ["Kotlin", "Compose", "Firebase", "Hilt"]
    },
    problem: "Most habit apps push streak anxiety without helping you plan recovery. Miss two days and the experience feels punitive.",
    solution: [
      "Introduced recovery windows: if you log a miss, Streaks schedules a make-up block and keeps the streak alive if you complete it.",
      "Added intent-aware reminders that stack. If you snooze the morning check-in, an evening summary nudges you again with context.",
      "Syncs anonymously with Firebase to keep data across devices while respecting privacy (no email required)."
    ],
    highlights: [
      { title: "Adaptive timeline", description: "Timeline view forecasts streak health for the week with color-coded warnings." },
      { title: "Offline first", description: "All state lives locally; Firebase sync runs opportunistically when you are online." },
      { title: "Shortcut widgets", description: "Android home screen widgets for one tap habit check-ins." }
    ],
    metrics: [
      { label: "Seven day retention", value: "68% in alpha" },
      { label: "Habits tracked", value: "12 average per user" }
    ]
  },
  "tool-id": {
    slug: "tool-id",
    tagline: "Factory tooling inventory with live production context",
    summary: [
      "Tool ID keeps Astra Honda Motor assembly lines in sync with the tooling they depend on.",
      "Supervisors get a real-time view of asset location, maintenance status, and the digital paperwork that goes with each tool."
    ],
    heroImage: {
      src: "/img/toolId.png",
      alt: "Tool ID admin interface"
    },
    context: {
      client: "Astra Honda Motor",
      role: "Full stack development and implementation lead",
      timeline: "2022",
      status: "In production across three plants",
      tech: ["Symfony", "React", "PostgreSQL", "Redis"]
    },
    problem: "Critical tooling rotated between lines without a reliable ledger. Operators burned time hunting or duplicating assets, which hurt throughput.",
    solution: [
      "Centralized inventory with QR based check-in and check-out so every tool move logs who, where, and why.",
      "Maintenance workflows trigger when usage thresholds hit, ensuring calibration happens before breakdowns.",
      "Deployed multi-tenant architecture for plant level autonomy while keeping corporate oversight dashboards."
    ],
    highlights: [
      { title: "Cycle traceability", description: "Historical journey per tool with audit trails down to the production order." },
      { title: "Maintenance autopilot", description: "Usage counters fire work orders directly into the maintenance queue." },
      { title: "Operator UX", description: "Tablet friendly UI lets line leads update status in under three taps." }
    ],
    metrics: [
      { label: "Asset lookup time", value: "Down 60%" },
      { label: "Preventive tasks", value: "Up 32% on schedule" }
    ],
    links: [
      { label: "Implementation notes", href: "#" }
    ]
  },
  advics: {
    slug: "advics",
    tagline: "Real-time production monitoring for brake systems",
    summary: [
      "ADVICS ships brake systems globally, and the assembly floor needed a live control center for throughput, downtime, and traceability.",
      "We built a monitoring suite that streams telemetry from PLCs into dashboards operators actually trust."
    ],
    heroImage: {
      src: "/img/advics.png",
      alt: "ADVICS production dashboard"
    },
    context: {
      client: "ADVICS Manufacturing Indonesia",
      role: "Lead engineer (Laravel and Reverb)",
      timeline: "2021 to 2024",
      status: "Deployed to five lines",
      tech: ["Laravel 11", "Reverb", "TimescaleDB", "Redis", "React"]
    },
    problem: "Legacy reporting lagged by hours, so line supervisors reacted too late to reject spikes or downtime cascades.",
    solution: [
      "Instrumented PLCs and Andon buttons to push events over MQTT into a Laravel Reverb layer, making every update visible in under two seconds.",
      "TimescaleDB stores time series metrics so we can replay any shift and drill into fault codes by component.",
      "Built drill down dashboards for quality, maintenance, and management, each seeing the same source of truth."
    ],
    highlights: [
      { title: "Downtime triage", description: "Live incident queue with SLA timers keeps maintenance accountable." },
      { title: "Shift playback", description: "Scrub through a shift to see when throughput dipped and why." },
      { title: "Role aware dashboards", description: "Operators, engineers, and executives share the same data with views tailored to their decisions." }
    ],
    metrics: [
      { label: "Alert latency", value: "1.6 seconds average" },
      { label: "Reject traceability", value: "100% serialized" }
    ]
  }
};
