/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        body: "url('assets/bg.png');",
        dashboard: "url('assets/bg-dashboard.png');",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          '01': '#D41640',
        },
        secondary: {
          '01': '#1D1B24',
        },
      },
    },
  },
  plugins: [],
};
