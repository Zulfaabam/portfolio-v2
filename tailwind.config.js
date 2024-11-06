const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'hero-dark': "url('svgs/Polygon-0.2s-1600px-2.svg')",
        'hero-light': "url('svgs/Polygon-0.2s-1600px-2-light.svg')",
        'btn-dark': "url('svgs/icon-sun.svg')",
        'btn-light': "url('svgs/icon-moon.svg')",
        'work-dark': "url('svgs/curve-line.svg')",
        'work-light': "url('svgs/curve-line-light.svg')",
      },
      colors: {
        blue: '#0070f3',
        'blue-light': '#00c6fb',
        cyan: '#50e3c2',
        dark: '#0F172A',
        'dark-gray': '#1e2938',
        darker: '#0B1120',
        primary: '#76C1FF',
        secondary: '#133d9e',
        accent: '#00f9e9',
        text: '#eaf0f5',
        bg: '#171717',
      },
      animation: {
        wave: 'wave 2.5s infinite',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(14deg)',
          },
          '20%': {
            transform: ' rotate(-8deg)',
          },
          '30%': {
            transform: 'rotate(14deg)',
          },
          '40%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '60%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
