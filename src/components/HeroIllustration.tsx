// NEW: focus vs noise hero illustration
export default function HeroIllustration({ className = "" }: { className?: string }) {
  const classes = ["h-full w-full", className].filter(Boolean).join(" ");

  return (
    <svg
      viewBox="0 0 800 220"
      className={classes}
      aria-hidden="true"
      role="presentation"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-noise" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.25)" />
          <stop offset="50%" stopColor="rgba(99,102,241,0.18)" />
          <stop offset="100%" stopColor="rgba(13,148,136,0.22)" />
        </linearGradient>
        <radialGradient id="hero-focus" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <rect width="800" height="220" fill="url(#hero-noise)" opacity="0.35" />
      <rect width="800" height="220" fill="url(#hero-focus)" opacity="0.3" />

      <g stroke="rgba(226,232,240,0.35)" strokeWidth="1.2" fill="none">
        <path d="M0 180 Q 40 170 80 182 T 160 180 T 240 178 T 320 184 T 400 181 T 480 183 T 560 179 T 640 182 T 720 180 T 800 181" />
        <path d="M0 155 Q 50 140 100 162 T 200 158 T 300 163 T 400 157 T 500 162 T 600 156 T 700 160 T 800 155" opacity="0.5" />
        <path d="M0 130 Q 60 120 120 140 T 240 135 T 360 142 T 480 136 T 600 140 T 720 132 T 800 138" opacity="0.3" />
      </g>

      <g>
        <path
          d="M0 150 C 120 60 200 160 320 110 C 440 60 520 180 640 120 C 720 85 760 110 800 95"
          stroke="rgba(59,130,246,0.85)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0 150 C 120 60 200 160 320 110 C 440 60 520 180 640 120 C 720 85 760 110 800 95"
          stroke="rgba(56,189,248,0.45)"
          strokeWidth="9"
          fill="none"
          opacity="0.35"
        />
      </g>

      <g opacity="0.25" fill="rgba(255,255,255,0.4)">
        {Array.from({ length: 36 }).map((_, index) => {
          const x = (index * 22) % 800;
          const y = 20 + ((index * 37) % 180);
          const size = 1.2 + ((index * 5) % 6) * 0.35;
          return <circle key={index} cx={x} cy={y} r={size} />;
        })}
      </g>
    </svg>
  );
}
