import Link from "next/link";

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">to Home</Link>
      </li>
      <li>
        <Link href="/blog">to Blog</Link>
      </li>
      <li>
        <Link href="/digital-garden">to Digital Garden</Link>
      </li>
      <li>
        <Link href="/resume">to Resume</Link>
      </li>
    </ul>
  );
};
