import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Image from "next/image";

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
            {/* <section className="bg-red-200">
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map(({ id, date, title, imageUrl }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <Image src={imageUrl} height={500} width={800} />
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section> */}
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
