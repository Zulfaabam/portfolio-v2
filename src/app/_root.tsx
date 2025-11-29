// import type { Metadata } from 'next';
import '../globals.css';
import { outfit } from '@/lib/fonts';
import FloatingSocmed from '@/components/floating-socmed';
import Navbar from '@/components/navbar';
// import { Analytics } from '@vercel/analytics/next';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import appCss from './globals.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'TanStack Start Starter' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
});

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang='en' className={`${outfit.className} `}>
//       <body>
//         <div id='root' className='relative'>
//           <Navbar />
//           <FloatingSocmed />
//           {children}
//           <Analytics />
//         </div>
//       </body>
//     </html>
//   );
// }

function RootLayout() {
  return (
    <html lang='en' className={`${outfit.className} `}>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
