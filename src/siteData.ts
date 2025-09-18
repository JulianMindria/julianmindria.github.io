export const projects = [
  {
    title: "OnlyLink - whitelist-first browser",
    slug: "onlylink",
    blurb: "A distraction-free Android browser that only opens sites you approve. Guard your attention.",
    tags: ["Android", "Compose", "Focus"],
    href: "#",
    // NEW: screenshot metadata
    imageSrc: "/img/OnlyLink.jpg",
    imageAlt: "OnlyLink mobile browser hero screen",
  },
  {
    title: "Beacon - service runner & scheduler",
    slug: "beacon",
    blurb: "Start/stop all your local services from one place. Simple schedules you can actually trust.",
    tags: ["Go", "Tauri", "CLI", "Desktop"],
    href: "#",
    // NEW: screenshot metadata
    imageSrc: "/img/beacon.png",
    imageAlt: "Beacon scheduler desktop preview",
  },
  {
    title: "Streaks - habit counter",
    slug: "streaks",
    blurb: "Duolingo-style streaks, dead-simple habit tracking, zero fluff.",
    tags: ["Android", "Compose", "Gamified"],
    href: "#",
    // NEW: screenshot metadata
    imageSrc: "/img/Streaks.jpg",
    imageAlt: "Streaks habit dashboard interface",
  },
  // {
  //   title: "ProxyDoc - API docs by proxy",
  //   slug: "proxydoc",
  //   blurb: "Language-agnostic docs by capturing real traffic. Export OpenAPI 3.1 & Postman.",
  //   tags: ["DevTools", "API", "Docs"],
  //   href: "#",
  // },
  {
    title: "Tool ID - Manage Tooling Assets",
    slug: "tool-id",
    blurb: "Manage Tool Across all line production, specifically used on Astra Honda Motor.",
    tags: ["Symfony", "React", "PostgreSQL"],
    href: "#",
    imageSrc: "/img/toolId.png",
    imageAlt: "Tool ID management interface",
  },
  {
    title: "ADVICS - production monitoring",
    slug: "advics",
    blurb: "Real-time line dashboards with efficiency, rejects, and Andon across multiple lines.",
    tags: ["Laravel 11", "Reverb", "TimescaleDB"],
    imageSrc: "/img/advics.png",
    imageAlt: "ADVICS production monitoring interface",
  },
] as const;
