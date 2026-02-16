import Layout from "../../components/Layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Header } from "../../components/Typography";
import BlogMeta from "../../components/BlogMeta";
import TagPill from "../../components/TagPill";
import lengthToMinutes from "../../services/lengthToMinutes";

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
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
      <article className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-16 pt-8">
        <Header styles="text-center tracking-wider leading-relaxed md:leading-none">
          {postData.title}
        </Header>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {postData.tags?.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>

        <BlogMeta
          dateString={postData.date}
          readingTime={lengthToMinutes(postData.contentHtml.length || 100)}
          styles="mt-3"
        />

        <Image
          src={postData.imageUrl}
          alt={postData.title}
          height={500}
          width={800}
          className="mt-8 rounded-lg object-cover"
        />

        <div
          className="mt-10 w-full prose text-left lg:prose-xl dark:text-secondary"
          dangerouslySetInnerHTML={{
            __html: postData.contentHtml,
          }}
        />
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
