/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.tsx', './src/presentation/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
