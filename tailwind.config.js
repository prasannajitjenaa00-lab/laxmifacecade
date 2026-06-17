/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1e',
          900: '#111827',
          800: '#1e293b',
          700: '#1d4ed8',
        },
        brand: {
          orange: '#F97316',
          'orange-dark': '#ea6c0a',
          'orange-light': '#fb923c',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
