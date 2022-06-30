import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function Layout({ children, home }) {
  return (
    <div
      className={`w-full h-full ${
        !home ? "pt-20" : ""
      } pb-28 bg-white dark:bg-dark bg-cover bg-center transition-all`}
    >
      {!home ? <TopNav /> : null}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
