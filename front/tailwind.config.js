/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7C3AED",
                    dark: "#6D28D9",
                    light: "#C4B5FD",
                },
                background: {
                    DEFAULT: "#FFFFFF",
                    light: "#F7F7FA",
                },
                text: {
                    DEFAULT: "#1F1F1F",
                    muted: "#A1A1AA",
                },
                accent: "#EC4899",
            },
        },
    },
    plugins: [],
};
