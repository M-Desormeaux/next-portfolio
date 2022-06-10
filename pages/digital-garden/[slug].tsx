import { GetStaticPaths, GetStaticProps } from "next";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllThoughtSlugs } from "../../utils";
import { ThoughtProps } from "./interfaces";

const Thought = ({ slug }: ThoughtProps) => {
  return (
    <div>
      <Navbar />
      <h1>Thought Page</h1>
      <h2>{slug}</h2>
    </div>
  );
};

export default Thought;

export const getStaticProps: GetStaticProps<ThoughtProps> = async (context) => {
  const slug = context.params?.slug as string;
  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllThoughtSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
};
