import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { Header } from "./Typography/index";

const name = "Jade True";
export const siteTitle = "Jade True | Frontend developer";

export default function Layout({
    children,
    home,
}: {
    children: React.ReactNode;
    home?: boolean;
}) {
    return (
        <div className="max-w-5xl w-full m-auto md:h-screen">
            <Head>
                <link rel="icon" href="/favicon.ico" />
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
            </Head>
            <header>
                <Navigation name={name} />
                {home ? (
                    <>
                        <Header size="large" styles="tracking-wider py-2">
                            Hey, I'm Jade
                        </Header>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2>
                            <Link href="/">
                                <a>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
