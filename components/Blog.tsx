import React from "react";
import Link from "next/link";
import Image from "next/image";
import Date from "./date";

import { XyzTransitionGroup } from "@animxyz/react";

import { Header, Body } from "./Typography";
import Button from "./Button";
export interface Props {
    data: any;
    styles?: string;
    showAllBlogs?: boolean;
}

const Blog: React.FC<Props> = ({ data, showAllBlogs = false }) => {
    return (
        <div id="blog">
            <Header styles="text-center w-full pt-8 justify-center">Blogs</Header>
            <XyzTransitionGroup appearVisible xyz="duration-15 tall-50% wide-5">
                <div className="flex items-center justify-center w-full">
                    <div
                        className={`grid w-full ${showAllBlogs && "grid-rows-2"
                            } gap-8 my-24 md:grid-cols-2`}
                    >
                        {data
                            .map(({ id, date, title, imageUrl }) => (
                                <div
                                    key={id}
                                    className="flex flex-col transition duration-500 transform rounded-lg hover:scale-110 group"
                                >
                                    <Link href={`/posts/${id}`}>
                                        <a>
                                            {imageUrl && (
                                                <Image
                                                    src={imageUrl}
                                                    height={600}
                                                    width={1000}
                                                    className="rounded-lg"
                                                />
                                            )}
                                            <Body
                                                weight="font-normal"
                                                styles="p-3 transform group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:bg-clip-text"
                                            >
                                                {title}
                                            </Body>
                                        </a>
                                    </Link>
                                    <Date dateString={date} styles="px-3" />
                                </div>
                            ))
                            .slice(...(showAllBlogs ? [] : [0, 2]))}
                    </div>
                </div>
            </XyzTransitionGroup>
            {!showAllBlogs && (
                <div className="flex justify-center">
                    <Button href="/blogs">View all blogs 📖</Button>
                </div>
            )}
        </div>
    );
};

export default Blog;
