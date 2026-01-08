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
                    950: "#020202", // True black
                    900: "#050505", // Deepest gray
                    800: "#0a0a0a", // Surface
                    700: "#121212", // Secondary surface
                },
                violet: {
                    900: "#2e1065",
                    500: "#8b5cf6",
                    400: "#a78bfa",
                },
                cyan: {
                    500: "#06b6d4",
                    400: "#22d3ee",
                },
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
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                shimmer: "shimmer 2s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "gradient-x": "gradient-x 3s ease infinite",
            },
        },
    },
    plugins: [],
};
export default config;
