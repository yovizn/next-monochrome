import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            mobile: "479px",
            tablet: "700px",
            desktop: "1280px",
            "max-mobile": { max: "480px" },
            "max-tablet": { max: "699px" },
            "max-desktop": { max: "1279px" },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            background: {
                DEFAULT: "hsl(var(--background-200) / <alpha-value>)",
                "100": "hsl(var(--background-100) / <alpha-value>)",
            },
            foreground: {
                DEFAULT: "hsl(var(--text-200) / <alpha-value>)",
                "100": "hsl(var(--text-100) / <alpha-value>)",
            },
            blue: "hsl(var(--blue) / <alpha-value>)",
            border: "hsl(var(--border) / <alpha-value>)",
        },
    },
    plugins: [],
}
export default config
