import Head from "next/head";
import { useEffect, useState } from "react";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData, Post } from "../lib/posts";
import { GetStaticProps } from "next";
import HomeSplash from "../components/HomeSplash";
import About from "../components/About";
import Skills from "../components/Skills";
import CTA from "../components/CTA";
import Blog from "../components/Blog";
import { Advice } from "../models/Advice";

export default function Home({
    allPostsData,
}: {
    allPostsData: Post[];
}) {
    const [advice, setAdvice] = useState<Advice>({ id: "", advice: "" });

    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
            .then((response) => response.json())
            .then((singleAdvice) => setAdvice(singleAdvice.slip));
    }, []);

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="pb-24">
                <HomeSplash />
            </div>
            <div className="py-24">
                <About />
            </div>
            <div className="py-24">
                <Skills />
            </div>
            <div className="py-24">
                <CTA advice={advice} />
            </div>
            <div className="py-24">
                <Blog data={allPostsData} />
            </div>
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
