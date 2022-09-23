import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Body, Header } from "../../components/Typography";

export default function Post({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
        imageUrl: string;
    };
}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="flex flex-col items-center w-full p-2 m-auto mb-12 text-center">
                <Header styles="mt-12 tracking-wider">{postData.title}</Header>
                <Date dateString={postData.date} styles="mb-12" />
                <Image
                    src={postData.imageUrl}
                    height={500}
                    width={800}
                    className="rounded-lg"
                />
                <Body size="base">
                    <div
                        className="mt-12 prose text-left lg:prose-xl"
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </Body>
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};
