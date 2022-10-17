import { GetStaticProps } from "next";
import React from "react";
import Blog from "../components/Blog";
import Layout from "../components/Layout";
import { Header } from "../components/Typography";
import { getSortedPostsData } from "../lib/posts";

export default function blog({
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
        <Layout>
            <Blog data={allPostsData} showAllBlogs />
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
