import { GetStaticPaths, GetStaticProps } from "next";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPostSlugs } from "../../utils";
import { PostProps } from "../../components/BlogPosts/interfaces";

const Post = ({ slug }: PostProps) => {
  return (
    <div>
      <Navbar />
      <h1>Post Page</h1>
      <h2>{slug}</h2>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const slug = context.params?.slug as string;
  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};
