// import { Outfit, Pacifico } from 'next/font/google';

import pkg from 'next/font/google';
const { Outfit, Pacifico } = pkg;

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export const fontPacifico = pacifico.className;
