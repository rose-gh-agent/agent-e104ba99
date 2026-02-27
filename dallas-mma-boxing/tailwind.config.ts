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
        primary: "#000000",
        "dark-section": "#161616",
        "dark-card": "#2a2a2a",
        "light-gray": "#e2e2e2",
        "medium-gray": "#f7f7f7",
        "body-text": "#5e5e5e",
      },
      fontFamily: {
        heading: ["var(--font-archivo-black)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        h1: ["54px", { lineHeight: "1.1" }],
        h2: ["39px", { lineHeight: "1.2" }],
        h4: ["22px", { lineHeight: "1.4" }],
        nav: ["14px", { lineHeight: "1.5", letterSpacing: "0.994px" }],
      },
    },
  },
  plugins: [],
};
export default config;
