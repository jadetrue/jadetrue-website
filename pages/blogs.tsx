import { GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import { getSortedPostsData, Post } from "../lib/posts";
import { Header } from "../components/Typography";
import BlogCard from "../components/BlogCard";
import BlogListItem from "../components/BlogListItem";

interface Props {
    allPostsData: Post[];
}

export default function BlogsPage({ allPostsData }: Props) {
    const [featured, ...rest] = allPostsData;

    return (
        <Layout>
            <div className="mx-auto w-full max-w-4xl px-4 py-8">
                <Header styles="text-center w-full justify-center">
                    Jade's Journey Journal
                </Header>

                <section className="mt-12">
                    <BlogCard post={featured} />
                </section>

                {rest.length > 0 && (
                    <section className="mt-12">
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {rest.map((post) => (
                                <BlogListItem key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                )}
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
