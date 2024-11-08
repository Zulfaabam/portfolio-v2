const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        pacifico: ['var(--font-pacifico)'],
      },
      // backgroundImage: {
      //   'hero-dark': "url('svgs/Polygon-0.2s-1600px-2.svg')",
      //   'hero-light': "url('svgs/Polygon-0.2s-1600px-2-light.svg')",
      //   'btn-dark': "url('svgs/icon-sun.svg')",
      //   'btn-light': "url('svgs/icon-moon.svg')",
      //   'work-dark': "url('svgs/curve-line.svg')",
      //   'work-light': "url('svgs/curve-line-light.svg')",
      // },
      colors: {
        // blue: '#0070f3',
        // 'blue-light': '#00c6fb',
        // cyan: '#50e3c2',
        // dark: '#0F172A',
        // 'dark-gray': '#1e2938',
        // darker: '#0B1120',
        primary: '#76C1FF',
        secondary: '#133d9e',
        accent: '#00f9e9',
        fg: '#eaf0f5',
        dark: '#171717',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'reverse-spin-slow': 'reverse-spin 6s linear infinite',
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
      },
      keyframes: {
        'reverse-spin': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        'bounce-horizontal': {
          '0%': {
            transform: 'translateX(10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            transform: 'translateX(10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      // animation: {
      //   wave: 'wave 2.5s infinite',
      // },
      // keyframes: {
      //   wave: {
      //     '0%': {
      //       transform: 'rotate(0deg)',
      //     },
      //     '10%': {
      //       transform: 'rotate(14deg)',
      //     },
      //     '20%': {
      //       transform: ' rotate(-8deg)',
      //     },
      //     '30%': {
      //       transform: 'rotate(14deg)',
      //     },
      //     '40%': {
      //       transform: 'rotate(-4deg)',
      //     },
      //     '50%': {
      //       transform: 'rotate(10deg)',
      //     },
      //     '60%': {
      //       transform: 'rotate(0deg)',
      //     },
      //     '100%': {
      //       transform: 'rotate(0deg)',
      //     },
      //   },
      // },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
