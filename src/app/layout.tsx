import type { Metadata } from 'next';
import '../globals.css';
import { outfit } from '@/lib/fonts';
import FloatingSocmed from '@/components/floating-socmed';
import Navbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Abams',
  description: "Abam's Portfolio created using Next.js",
  icons: 'https://i.ibb.co/R4pTgPX/abam-rounded.png',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dx34xih1p/image/upload/c_crop,w_1200,h_630/v1731747790/abams-home_pxrrjw.png',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://res.cloudinary.com/dx34xih1p/image/upload/c_fill,w_400,h_400,ar_1:1/v1731747790/abams-home_pxrrjw.png',
        width: 400,
        height: 400,
      },
    ],
  },
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
          <Analytics />
        </div>
      </body>
    </html>
  );
}
