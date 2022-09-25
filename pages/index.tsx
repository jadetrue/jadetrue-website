import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import HomeSplash from "../components/HomeSplash";
import About from "../components/About";
import Skills from "../components/Skills";
import CTA from "../components/CTA";
import Blog from "../components/Blog";

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
            <div className="pb-24">
                <HomeSplash />
            </div>
            <div className="py-24 md:py-48">
                <About />
            </div>
            <div className="py-24 md:py-48">
                <Skills />
            </div>
            <div className="py-24 md:py-48">
                <CTA />
            </div>
            <Blog data={allPostsData} />
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
