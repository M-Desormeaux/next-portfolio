import { BlogProps } from "./interfaces";
import Link from "next/link";

export const BlogPosts = ({ posts }: BlogProps) => {
  if (posts?.length === 0 || posts === undefined) {
    return <p>No blog posts at this time</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
