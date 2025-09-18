import * as React from "react";

/** Unified hero carousel (desktop + phone slides) */
export default function HeroCarousel() {
  type Slide =
    | { id: string; kind: "desktop"; title: string; src: string }
    | { id: string; kind: "phone";   title: string; src: string; badge: string };

  const slides: Slide[] = [
    { id: "beacon",   kind: "desktop", title: "Beacon — service runner & scheduler (Desktop)", src: "/img/beacon.png" },
    { id: "onlylink", kind: "phone",   title: "OnlyLink — whitelist-first browser (Android)",  src: "/img/OnlyLink.jpg", badge: "OnlyLink" },
    { id: "streaks",  kind: "phone",   title: "Streaks — record your new habits (Android)",     src: "/img/Streaks.jpg",  badge: "Streaks" },
  ];

  const [idx, setIdx] = React.useState(0);
  const [hover, setHover] = React.useState(false);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // auto-advance
  React.useEffect(() => {
    if (hover || reduce) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIdx(i => (i + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [hover, reduce, slides.length]);

  // keyboard
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIdx(i => (i - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  // swipe
  const startX = React.useRef<number | null>(null);
  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
  }
  function onPointerUp(e: React.PointerEvent) {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) {
      setIdx(i => (dx > 0 ? (i - 1 + slides.length) % slides.length : (i + 1) % slides.length));
    }
    startX.current = null;
  }

  const current = slides[idx];

  return (
    <aside
      className="relative w-full max-w-[560px] mx-auto"
      aria-label="Product gallery"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* pill tabs */}
      <div className="mb-3 flex flex-wrap gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIdx(i)}
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs backdrop-blur transition",
              i === idx
                ? "border-white/20 bg-white/15 text-white/90"
                : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
            ].join(" ")}
          >
            <span
              className={[
                "h-1.5 w-1.5 rounded-full",
                s.kind === "desktop" ? "bg-emerald-400" : "bg-[#3DDC84]"
              ].join(" ")}
            />
            {s.kind === "desktop" ? "Beacon — Desktop" : `Android — ${(s as any).badge}`}
          </button>
        ))}
      </div>

      {/* frame */}
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(8,15,27,0.65)] shadow-[0_20px_60px_rgba(8,15,27,0.35)] backdrop-blur"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {/* host aspect for ALL slides */}
        <div className="relative aspect-[16/10] w-full">
          {/* background fill */}
          <img
            src={current.src}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-35 blur-2xl scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,17,31,0.16),rgba(9,17,31,0.30))]" />

          {/* slide track (fade + slight slide) */}
          <div className="absolute inset-0">
            {slides.map((s, i) => {
              const active = i === idx;
              return (
                <div
                  key={s.id}
                  className={[
                    "absolute inset-0 transition-all duration-500 ease-out",
                    active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                  ].join(" ")}
                  aria-hidden={!active}
                >
                  {s.kind === "desktop" ? (
                    <div className="absolute inset-0 grid place-items-center p-4">
                      <img
                        src={s.src}
                        alt={s.title}
                        className="max-h-full max-w-full object-contain rounded-lg ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      <figcaption className="pointer-events-none absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-2.5 py-1 text-[10px] text-white/85 backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Beacon — service runner & scheduler
                        </span>
                      </figcaption>
                    </div>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="relative h-[88%] sm:h-[90%] lg:h-[92%] aspect-[9/19] overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,15,27,0.65)]">
                        <img
                          src={s.src}
                          alt={s.title}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,17,31,0.10),rgba(9,17,31,0.20))]" />
                        <div className="pointer-events-none absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-white/15" />
                      </div>

                      <figcaption className="pointer-events-none absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-black/30 px-2.5 py-1 text-[10px] text-white/85 backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC84]" />
                          Android · {(s as any).badge}
                        </span>
                      </figcaption>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* arrows */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => (e.stopPropagation(), setIdx(i => (i - 1 + slides.length) % slides.length))}
              className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-black/25 text-white/80 backdrop-blur transition hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => (e.stopPropagation(), setIdx(i => (i + 1) % slides.length))}
              className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-black/25 text-white/80 backdrop-blur transition hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Show ${s.id}`}
            onClick={() => setIdx(i)}
            className={[
              "h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/40",
              i === idx ? "w-6 bg-white/80" : "w-2 bg-white/30 hover:bg-white/50",
            ].join(" ")}
          />
        ))}
      </div>
    </aside>
  );
}
