import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/posts";
import BlogMeta from "./BlogMeta";
import TagPill from "./TagPill";

interface Props {
    post: Post;
}

const BlogListItem: React.FC<Props> = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`} className="group block">
            <article className="flex gap-4 rounded-lg p-3 transition duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 sm:gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="112px"
                    />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                    <div className="mb-1.5 flex flex-wrap gap-1.5">
                        {post.tags?.map((tag) => (
                            <TagPill key={tag} tag={tag} />
                        ))}
                    </div>
                    <h3 className="mb-1 font-body text-lg font-semibold text-primary transition-colors group-hover:text-cyan-600 dark:text-secondary dark:group-hover:text-cyan-400">
                        {post.title}
                    </h3>
                    {post.excerpt && (
                        <p className="mb-1.5 line-clamp-1 font-body text-sm text-gray-600 dark:text-gray-300">
                            {post.excerpt}
                        </p>
                    )}
                    <BlogMeta dateString={post.date} />
                </div>
            </article>
        </Link>
    );
};

export default BlogListItem;
