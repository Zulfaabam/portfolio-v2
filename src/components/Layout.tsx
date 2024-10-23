import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';

export interface LayoutProps {
  children: React.ReactNode;
  isHome?: boolean;
}

export default function Layout({ children, isHome }: LayoutProps) {
  return (
    <div
      className={`w-full h-full ${
        !isHome ? 'pt-20' : ''
      } pb-28 bg-white dark:bg-dark bg-cover bg-center transition-all`}
    >
      {!isHome ? <TopNav /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
