import type { SVGProps, JSX } from "react";

export type StatIconName = "installs" | "active" | "ship" | "prs";

// NEW: inline stat icon set without extra dependencies
const iconPaths: Record<StatIconName, JSX.Element> = {
  installs: (
    <g strokeLinecap="round">
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 4.8v1.9" />
      <path d="M12 17.3v1.9" />
      <path d="M6.2 12H4.3" />
      <path d="M19.7 12h-1.9" />
      <path d="M7.7 7.7 6.4 6.4" />
      <path d="M17.6 17.6 16.3 16.3" />
      <path d="M7.7 16.3 6.4 17.6" />
      <path d="M17.6 6.4 16.3 7.7" />
    </g>
  ),
  active: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 17.5c-1.3 0-2.6.5-3.5 1.5.3-1.6.9-3.8 2.1-6.1 1.2-2.3 2.8-4.4 4.7-6.1.6 2.5.6 5.2.1 7.7" />
      <path d="M14.4 7.2 18 5l-.8 3.8" />
      <path d="M12 21c-4.1 0-7.5-3.3-7.5-7.5S7.9 6 12 6s7.5 3.3 7.5 7.5c0 1.7-.6 3.3-1.5 4.6" />
    </g>
  ),
  ship: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5.5v4" />
      <path d="M7.5 4.5 9 6.5" />
      <path d="M16.5 4.5 15 6.5" />
      <circle cx="12" cy="12" r="6" />
      <path d="M8.5 12h2.7L12 14.8 12.8 12h2.7" />
    </g>
  ),
  prs: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5h14l1.5 5.5v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 17v-7L5 5Z" />
      <path d="M3.5 10.5h4l2 3h5l2-3h4" />
      <path d="M10.5 14.5 12 16l3-3" />
    </g>
  ),
};

export default function StatIcon({ name, className = "", strokeWidth = 1.5, ...props }: SVGProps<SVGSVGElement> & { name: StatIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={["inline-block", className].filter(Boolean).join(" ")}
      focusable="false"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
