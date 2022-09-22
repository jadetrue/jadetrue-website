import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";
import HomeSplash from "../components/HomeSplash";
import { Body } from "../components/Typography";
import About from "../components/About";
import Skills from "../components/Skills";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        imageUrl: string;
    }[];
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HomeSplash />
            <About />
            <Skills />
            <Contact />
            {/* <CTA /> */}
            {/* <div className="flex space-x-4 space-y-4">
                {allPostsData.map(({ id, date, title, imageUrl }) => (
                    <div key={id} className="flex flex-col">
                        <Link href={`/posts/${id}`}>
                            <a>
                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        height={600}
                                        width={1000}
                                        className="rounded-lg"
                                    />
                                )}
                                <Body size="large">{title}</Body>
                            </a>
                        </Link>
                        <Date dateString={date} />
                    </div>
                ))}
            </div> */}
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
