/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            darkest: "#030A19",
            dark: "#051129",
            surface: "#071838",
            card: "#0B214A",
            border: "rgba(220, 229, 240, 0.12)",
            highlight: "#1E3765",
          },
          blue: {
            primary: "#0070F3",
            hover: "#005BD0",
            glow: "#00D2FF",
            accent: "#0284C7",
          },
          indigo: {
            deep: "#1A1A3E",
            dark: "#0F0F28",
            border: "#2E2D62",
          },
          slate: {
            light: "#F5F8FC",
            card: "#FFFFFF",
            border: "#DCE5F0",
            muted: "#64748B",
            text: "#0F172A",
          },
        },
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
}
