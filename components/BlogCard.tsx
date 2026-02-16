import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/posts";
import BlogMeta from "./BlogMeta";
import TagPill from "./TagPill";

interface Props {
    post: Post;
}

const BlogCard: React.FC<Props> = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`} className="group block">
            <article className="overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:shadow-lg dark:bg-gray-900">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                            <TagPill key={tag} tag={tag} />
                        ))}
                    </div>
                    <h2 className="mb-2 font-body text-2xl font-semibold text-primary transition-colors group-hover:text-cyan-600 dark:text-secondary dark:group-hover:text-cyan-400 md:text-3xl">
                        {post.title}
                    </h2>
                    {post.excerpt && (
                        <p className="mb-4 font-body text-base text-gray-600 dark:text-gray-300">
                            {post.excerpt}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <BlogMeta dateString={post.date} />
                        <span className="font-body text-sm font-medium text-cyan-600 transition-colors group-hover:text-cyan-500 dark:text-cyan-400">
                            Read more &rarr;
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
