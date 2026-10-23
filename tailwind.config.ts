import type { Config } from "tailwindcss";

const brand = {
  DEFAULT: "#5B0E86",
  deep: "#3A0656",
  50: "#F8F3FB",
  100: "#EFE5F6",
  200: "#DCC4EC",
  300: "#C29BDD",
  400: "#9B5CC4",
  500: "#7A2DAB",
  600: "#5B0E86",
  700: "#4A0B6E",
  800: "#3A0656",
  900: "#25033A",
  pop: "#8A2BC2",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0A0E",
          2: "#24212A",
          3: "#3D3946",
        },
        muted: {
          DEFAULT: "#6B6676",
          2: "#8F8A99",
        },
        line: {
          DEFAULT: "#E7E4EB",
          strong: "#D5D1DB",
        },
        wash: {
          DEFAULT: "#F8F4FC",
          2: "#F0E9F7",
        },
        blush: {
          DEFAULT: "#FFF5F1",
          2: "#FDE9E2",
        },
        accent: {
          DEFAULT: "#E0509F",
          coral: "#FF8A73",
        },
        brand,
        // Legal pages and older markup reference `primary`.
        primary: { ...brand, hover: brand.deep, light: brand[400] },
        signal: {
          green: "#1F8A4C",
          greenbg: "#E3F5EA",
          amber: "#9A5B00",
          amberbg: "#FFF4D6",
          red: "#B42318",
          redbg: "#FDE7E4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.25rem", { lineHeight: "1.02", letterSpacing: "-0.04em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        "display-md": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-sm": ["2.125rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        frame: "1232px",
      },
      borderRadius: {
        box: "6px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,10,14,0.04), 0 8px 24px -12px rgba(11,10,14,0.12)",
        float: "0 2px 4px rgba(11,10,14,0.04), 0 24px 48px -16px rgba(11,10,14,0.22)",
        inset: "inset 0 0 0 1px rgba(11,10,14,0.06)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fill: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        scan: "scan 2.4s cubic-bezier(.4,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
