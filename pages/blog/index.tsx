import { BlogProps, PostSummary } from "./interfaces";
import { BlogPosts } from "./BlogPosts/BlogPosts";
import type { GetStaticProps } from "next";
import { getAllPostSlugs } from "../../utils";
import { Navbar } from "../../components/Navbar/Navbar";

const Blog = ({ posts }: BlogProps) => {
  return (
    <div>
      <Navbar />
      <h1>Blog Posts</h1>
      <BlogPosts posts={posts} />
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts: PostSummary[] = getAllPostSlugs().map((slug) => ({
    slug,
    title: slug,
  }));
  return {
    props: { posts },
  };
};
