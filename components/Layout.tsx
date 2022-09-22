import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import { Navigation } from "./Navigation";
import { Body } from "./Typography";

const name = "Jade True";
export const siteTitle = "Jade True | Frontend developer";

export default function Layout({
    children,
    home,
}: {
    children?: React.ReactNode;
    home?: boolean;
}) {
    return (
        <div className="w-full max-w-5xl px-8 m-auto md:h-screen">
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
                {/* TODO: Add meta description */}
                <meta name="description" content="" />
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
            <header>
                <Navigation name={name} />
            </header>
            <main>{children}</main>
            {!home && (
                <>
                    <div>
                        <Link href="/">
                            <a>
                                <Body>← Back to home</Body>
                            </a>
                        </Link>
                    </div>
                </>
            )}{" "}
            <Footer />
        </div>
    );
}
