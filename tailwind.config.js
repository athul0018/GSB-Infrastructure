/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    extend: {
      colors: {
        ink: {
          900: '#0E1A24',
          700: '#203240',
        },
        cloud: {
          50: '#F7F5F1',
        },
        mist: {
          100: '#E8EEF0',
        },
        steel: {
          500: '#60707C',
          300: '#C8D0D4',
        },
        aqua: {
          500: '#1E8C89',
          600: '#176C69',
        },
        sand: {
          300: '#C7B7A2',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(14, 26, 36, 0.06)',
        card: '0 12px 40px rgba(14, 26, 36, 0.08)',
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
