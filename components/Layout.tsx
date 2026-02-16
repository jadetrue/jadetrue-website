import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Navigation } from "./Navigation";

const name = "Jade True";
export const siteTitle = "Jade True | Software developer";

export default function Layout({
  children,
}: {
  children?: React.ReactNode;
  home?: boolean;
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      "darkMode" in localStorage &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("darkMode", JSON.stringify(isDark));
    }
  }, [isDark]);

  return (
    <div className={`${isDark ? "dark" : ""} dark:bg-primary w-full`}>
      <Head>
        <meta
          name="description"
          content="Hey, I'm Jade True! I'm a Front-end developer based in North Somerset."
        />
        <meta
          name="keywords"
          content="Front-end developer, Fullstack developer, React, TypeScript"
        />
        {/* <meta
          property="og:image"
          content="https://www.jadetrue.co.uk/preview.png"
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <header className="w-full sticky top-0 z-50 bg-secondary/80 dark:bg-primary/80 backdrop-blur-md px-8 md:px-0">
        <div className="m-auto md:max-w-5xl">
          <Navigation
            name={name}
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
            onClickIsDark={() => setIsDark(!isDark)}
          />
        </div>
      </header>
      <div className="m-auto md:max-w-5xl px-8 md:px-0">
        <main className="md:relative dark:bg-primary">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
