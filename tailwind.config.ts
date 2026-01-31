import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                obsidian: {
                    950: "#020202", // Deep Space
                    900: "#080808", // Obsidian
                    800: "#0d0d0d", // Graphite
                    700: "#1a1a1a", // Charcoal
                },
                "neon-cyan": {
                    DEFAULT: "#00f3ff",
                    50: "#e0feff",
                    100: "#b3fdff",
                    200: "#80fbff",
                    300: "#4df9ff",
                    400: "#1af7ff",
                    500: "#00f3ff",
                    600: "#00c2cc",
                    700: "#009299",
                    800: "#006166",
                    900: "#003133",
                },
                "neon-violet": {
                    DEFAULT: "#bc13fe",
                    50: "#f8e6ff",
                    100: "#ecbfff",
                    200: "#e091ff",
                    300: "#d361ff",
                    400: "#c733ff",
                    500: "#bc13fe",
                    600: "#960fcc",
                    700: "#710b99",
                    800: "#4b0766",
                    900: "#260433",
                },
            },
            letterSpacing: {
                "tighter-refined": "-0.04em",
                "tight-refined": "-0.02em",
                "widest-refined": "0.15em",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-space-grotesk)"],
            },
            keyframes: {
                spotlight: {
                    "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
                },
                shimmer: {
                    from: { backgroundPosition: "0 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "scan": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100vh)" },
                },
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                shimmer: "shimmer 2s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "gradient-x": "gradient-x 3s ease infinite",
                "scan": "scan 8s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
