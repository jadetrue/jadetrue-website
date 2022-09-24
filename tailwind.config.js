/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            display: ["Gistesy", "sans"],
            body: ["Montserrat", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#1c2120",
                secondary: "#fff",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
