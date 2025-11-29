// import FloatingSocmed from '@/components/floating-socmed';
// import Navbar from '@/components/navbar';
// import { Analytics } from '@vercel/analytics/next';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import appCss from './globals.css?url';
import FloatingSocmed from '@/components/floating-socmed';
import Navbar from '@/components/navbar';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Abams' },
      {
        name: 'description',
        content: "Abam's Portfolio created using Tanstack Start",
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dx34xih1p/image/upload/c_crop,w_1200,h_630/v1731747790/abams-home_pxrrjw.png',
      },
      {
        property: 'og:title',
        content: "Abam's Portfolio Website",
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://res.cloudinary.com/dx34xih1p/image/upload/v1733804018/abam-rounded_yt6jql.png',
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
    <html lang='en' className='font-outfit'>
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <FloatingSocmed />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
