import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Body, Header } from "../../components/Typography";
import lengthToMinutes from "../../services/lengthToMinutes";

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
        <meta name="og:title" content={postData.title} />
        <meta
          name="og:image"
          content={`https://www.jadetrue.co.uk/${postData.imageUrl}`}
        />
      </Head>
      <article className="flex flex-col items-center w-full p-2 pb-12 m-auto text-center">
        <div className="flex flex-col items-center justify-center w-full">
          <Header styles="pt-12 tracking-wider leading-relaxed md:leading-none">
            {postData.title}
          </Header>
          <Date
            dateString={postData.date}
            styles="px-3 pt-3 dark:text-secondary"
          />
          <Body size="extra-small" styles="pb-12">
            {`${lengthToMinutes(postData.contentHtml.length || 100)}`}
          </Body>
        </div>
        <Image
          src={postData.imageUrl}
          height={500}
          width={800}
          objectFit="cover"
          className="rounded-lg"
        />
        <Body size="base" color="dark:text-secondary">
          <div
            className="pt-12 prose text-left lg:prose-xl"
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
