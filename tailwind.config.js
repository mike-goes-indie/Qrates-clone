/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        pink: "var(--pink)",
        lightGray: "var(--light-gray)",
        gray: "var(--gray)",
        yellow: "var(--yellow)",
        orange: "var(--orange)"
      },
      fontSize: {
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
      },
      backgroundPosition: {
        sm: "30% top",
        md: "center"
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
  ],
}

