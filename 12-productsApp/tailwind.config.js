/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.tsx', './src/presentation/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        screen: 'rgb(var(--screen) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'text-primary-contrast':
          'rgb(var(--text-primary-contrast) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
