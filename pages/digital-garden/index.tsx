import { GetStaticProps } from "next";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllThoughtSlugs } from "../../utils";
import { GardenPosts } from "./GardenPosts/GardenPosts";
import { GardenProps, ThoughtSummary } from "./interfaces";

const DigitalGarden = ({ thoughts }: GardenProps) => {
  return (
    <>
      <Navbar />
      <h1>Collection of Thoughts</h1>
      <GardenPosts thoughts={thoughts} />
    </>
  );
};

export default DigitalGarden;

export const getStaticProps: GetStaticProps<GardenProps> = async () => {
  const thoughts: ThoughtSummary[] = getAllThoughtSlugs().map((slug) => ({
    slug,
    title: slug,
  }));
  return {
    props: { thoughts },
  };
};
