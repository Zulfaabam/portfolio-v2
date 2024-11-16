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
      backgroundImage: {
        'earth-from-space': 'url(/earth-from-space.png)',
      },
      colors: {
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
    },
  },
  plugins: [addVariablesForColors, require('tailwind-scrollbar-hide')],
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
