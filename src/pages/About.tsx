import Footer from "../components/Footer";
import TitleText from "../components/TitleText";
import { GitHubIcon } from "../assets/icons";

const About = () => {
  return (
    <div className="container about-page">
      <TitleText />
      <h2 className="my-4">About this app</h2>
      <section className="about-purpose">
        <p>
          This app is my attempt to stay productive during quarantine. This fun
          project works using the{" "}
          <a href="https://www.superheroapi.com/">Superhero-API</a>
        </p>
        <a
          className="btn btn-secondary btn-sm px-3 py-2"
          href="https://github.com/halosatrio/tanding-hero"
        >
          <GitHubIcon width={"18px"} /> <span className="ml-2">Visit Repo</span>
        </a>
      </section>
      <div className="how-it-works">
        <h3>How does this app work?</h3>
        <p>
          First, the app will generate random number from 1 to 731. 731 is the
          approximate amount of characters that the Superhero-API contains.
          Then, the app will fetch data from the API using the generated random
          number as the "id" of the character. Lastly, the app will calculate
          the power level of both the user character and the opponent character,
          then compare the values. The character which has higher power level
          wins the match.
        </p>
        <h3>Power Level Formula</h3>
        <p>
          Each character has powerstats that contain: Intelligence, Strength,
          Speed, Durability, Power, and Combat. The total power level are
          calculated based on the character's powerstats. The formula is 100% my
          idea. It is not based on any scientific formula. Well, it is what it
          is{" "}
          <span role="img" aria-label="Grinning Face with Sweat">
            😅
          </span>
        </p>
        <blockquote>
          Power Level = (Intelligence x 50) + (Strength x 30) + (Speed x 30) +
          (Durability x 20) + (Power x 100) + (Combat x 10)
        </blockquote>
        <h3>Win/Lose Error</h3>
        <p>
          Sometimes, the result is not like what you'd expect. I mean, how could
          this character wins over that character??? Well, in that case, there
          is something wrong in the character's powerstats. The data in the
          Superhero-API is not perfect. There are characters that have
          incomplete data. The incomplete data can be anything. In the "Win/Lose
          Error" scenario the incomplete data is the character's powerstats. The
          incomplete powerstats may fills with "null" for all the stats, that's
          why it could produce "inacurate" result.
        </p>
        <h3 className="mt-4 mb-3">The Assets This App Used</h3>
        <ul>
          <li>
            The Swords icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
            >
              Good Ware
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </li>
          <li>
            The Batman, Iron man, and Man-avatar icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </li>
        </ul>
      </div>
      <Footer isTanding={false} />
    </div>
  );
};

export default About;
