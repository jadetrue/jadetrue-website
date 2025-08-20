import Head from "next/head";
import Script from "next/script";
import { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
import { Body, InternalLink } from "./Typography";

const name = "Jade True";
export const siteTitle = "Jade True | Software developer";

export default function Layout({
  children,
  home,
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
    <div
      className={`${
        isDark ? "dark" : ""
      } m-auto md:max-w-5xl md:h-screen dark:bg-primary w-full px-8 md:px-0`}
    >
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

      <header className="md:top-0 md:z-50 bg-secondary dark:bg-primary">
        <Navigation
          name={name}
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
          onClickIsDark={() => setIsDark(!isDark)}
        />
      </header>
      <main className="md:relative dark:bg-primary">{children}</main>
      {!home && (
        <div className="flex justify-center w-full pb-12 dark:bg-primary">
          <InternalLink url="/">
            <Button>
              <Body size="small" color="text-secondary dark:text-primary">
                👈🏻 Back to home
              </Body>
            </Button>
          </InternalLink>
        </div>
      )}
      <Footer />
    </div>
  );
}
