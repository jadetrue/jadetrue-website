import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
import { Body, InternalLink } from "./Typography";

const name = "Jade True";
export const siteTitle = "Jade True | Front-end developer";

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
            } w-full m-auto max-w-5xl md:h-screen dark:bg-primary`}
        >
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta
                    name="description"
                    content="Hey, I'm Jade True! I'm a Front-end developer based in North Somerset."
                />
                <meta
                    name="keywords"
                    content="Front-end developer, Fullstack developer, React, TypeScript"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Open+Sans&display=swap"
                    rel="stylesheet"
                ></link>
                <script
                    src="https://kit.fontawesome.com/00cc1a91ac.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <header className="dark:bg-primary">
                <Navigation
                    name={name}
                    showMobileNav={showMobileNav}
                    setShowMobileNav={setShowMobileNav}
                    onClickIsDark={() => setIsDark(!isDark)}
                />
            </header>
            <main className="dark:bg-primary">{children}</main>
            {!home && (
                <div className="flex justify-center w-full pb-12 dark:bg-primary">
                    <InternalLink url="/">
                        <Button>
                            <Body
                                size="small"
                                color="text-secondary dark:text-primary"
                            >
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
