import { Navbar } from "../components/Navbar/Navbar";

const Home = () => {
  const twitterLink = (
    <a href="https://twitter.com/meliboi_" target="_blank" rel="noreferrer">
      Twitter
    </a>
  );
  const linkedInLink = (
    <a
      href="https://www.linkedin.com/in/m-desormeaux/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  );

  return (
    <div>
      <Navbar />
      <h1>👋 Howdy, I&apos;m Michael</h1>
      <p>
        Father of 2, husband, and enjoyer of many layers of Tech. Currently I am
        a Frontend React Developer, with a passion for growth and
        self-improvement. You can catch me around many developer communities,
        involved in some way or another.
      </p>
      <p>
        You can get find me at {twitterLink} or {linkedInLink}.
      </p>
    </div>
  );
};

export default Home;
