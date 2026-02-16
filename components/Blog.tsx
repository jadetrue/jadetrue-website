import React from "react";
import { Post } from "../lib/posts";
import { Header } from "./Typography";
import Button from "./Button";
import BlogListItem from "./BlogListItem";

export interface Props {
  data: Post[];
}

const Blog: React.FC<Props> = ({ data }) => {
  const latestPosts = data.slice(0, 2);

  return (
    <div id="blog">
      <Header styles="text-center w-full pt-8 justify-center">
        Jade's Journey Journal
      </Header>
      <div className="my-12">
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {latestPosts.map((post) => (
            <BlogListItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a href="/blogs">
          <Button>View all blogs</Button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
