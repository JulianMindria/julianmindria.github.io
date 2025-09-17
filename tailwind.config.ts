import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 28px 120px rgba(99, 102, 241, 0.28)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 55%), linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "120px 120px",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
        "marquee-slow": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
