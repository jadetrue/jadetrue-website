import React from "react";
import Link from "next/link";
import Image from "next/image";
import Date from "./date";
import { Header, Body } from "./Typography";

export interface Props {
    data: any;
    styles?: string;
}

const Blog: React.FC<Props> = ({ data }) => {
    return (
        <div id="blog">
            <Header styles="text-center">Blog</Header>
            <div className="flex w-full gap-4 my-24 drop-shadow-lg">
                {data.map(({ id, date, title, imageUrl }) => (
                    <div
                        key={id}
                        className="flex flex-col rounded-lg bg-secondary"
                    >
                        <Link href={`/posts/${id}`}>
                            <a>
                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        height={600}
                                        width={1000}
                                        className="rounded-t-lg"
                                    />
                                )}
                                <Body
                                    size="medium"
                                    weight="font-semibold"
                                    styles="p-3"
                                >
                                    {title}
                                </Body>
                            </a>
                        </Link>
                        <Date dateString={date} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
