import type { Metadata } from 'next';
import '../globals.css';
import { outfit } from '@/lib/fonts';
import FloatingSocmed from '@/components/floating-socmed';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Abams',
  description: "Abam's Portfolio created using Next.js",
  icons: 'https://i.ibb.co/R4pTgPX/abam-rounded.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${outfit.className} `}>
      <body>
        <div id='root' className='relative'>
          <Navbar />
          <FloatingSocmed />
          {children}
        </div>
      </body>
    </html>
  );
}
