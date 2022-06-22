import Link from "next/link";
import { GardenProps } from "./interfaces";

export const GardenPosts = ({ thoughts }: GardenProps) => {
  if (thoughts?.length === 0 || thoughts === undefined) {
    return <p>No blog posts at this time</p>;
  }

  return (
    <ul>
      {thoughts.map((post) => (
        <li key={post.slug}>
          <Link href={`/digital-garden/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
