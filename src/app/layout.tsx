import type { Metadata } from 'next';

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
    <html lang='en'>
      {/* <head>
        <link rel='icon' href='https://i.ibb.co/R4pTgPX/abam-rounded.png' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content="Abam's Portfolio created using Next.js"
        />
        <link rel='apple-touch-icon' href='/logo192.png' />
        <link rel='manifest' href='/manifest.json' />
        <title>Abams</title>
      </head> */}
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
