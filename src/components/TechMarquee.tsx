const stack = [
  "Laravel 11",
  "Reverb",
  "Redis",
  "TimescaleDB",
  "PostgreSQL",
  "React",
  "Tailwind",
  "Go",
  "MQTT",
  "Tauri",
  "Wails",
  "NATS",
] as const;

export default function TechMarquee() {
  const loop = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,18,33,0.65)] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />

      <div className="flex animate-[marquee_26s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {loop.map((label, index) => (
          <span key={`${label}-${index}`} className="inline-flex items-center gap-4 text-sm text-[var(--muted)]">
            <span>{label}</span>
            {index !== loop.length - 1 && (
              <span className="text-xs text-white/20">/</span>
            )}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
