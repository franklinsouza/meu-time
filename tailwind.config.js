/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        '01': '#D41640',
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        body: "url('assets/bg.png');",
      },
    },
  },
  plugins: [],
};
