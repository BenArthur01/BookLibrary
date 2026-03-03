/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#086da3",
                secondary: "#008bc9",
                lightblue: "#e8f1f8"
            }
        },
    },
    plugins: [],
};