import React from "react";
import Link from "next/link";
import Image from "next/image";
import Date from "./Date";
import { Header, Body } from "./Typography";
export interface Props {
    data: any;
    styles?: string;
}

const Blog: React.FC<Props> = ({ data }) => {
    return (
        <div id="blog">
            <Header styles="text-center">Blog</Header>
            <div className="flex items-center justify-center w-full">
                <div className="my-24 md:w-1/2">
                    {data.map(({ id, date, title, imageUrl }) => (
                        <div key={id} className="flex flex-col rounded-lg">
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
                                    <Body weight="font-normal" styles="p-3">
                                        {title}
                                    </Body>
                                </a>
                            </Link>
                            <Date dateString={date} styles="px-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
