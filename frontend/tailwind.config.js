/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "l-light": "#f8fafc", //slate-50
        "l-mid": "#e2e8f0", //slate-200
        "l-dark": "#94a3b8", //slate-400
        "l-contrast": "#2563eb", // blue-600
        "d-dark": "#020617", //slate-950
        "d-mid": "#1e293b", //slate-800
        "d-light": "#475569", //slate-600
        "d-contrast": "#f97316", //orange-500
      },
    },
  },
  plugins: [],
};
