import Footer from "../components/Footer";
import TitleText from "../components/TitleText";
import github from "../assets/github.svg";

let h3 = " text-3xl mb-2 font-medium";
let p = "mb-4";
let link = "text-blue-500 hover:text-blue-700 hover:underline";

const About = () => {
  return (
    <div className="container mx-auto font-sans px-8 lg:max-w-6xl">
      <TitleText />
      <h2 className="my-4 text-center text-4xl">About this app</h2>
      <section className="text-center py-0 px-7 mb-5">
        <p className={p}>
          This app is my attempt to stay productive during quarantine. This fun
          project works using the{" "}
          <a className={link} href="https://www.superheroapi.com/">
            Superhero-API
          </a>
        </p>
        <a
          className="py-2 px-4 bg-gray-500 text-white leading-6 inline-block text-center align-middle rounded-md hover:bg-gray-600"
          href="https://github.com/halosatrio/tanding-hero"
        >
          <img src={github} alt="github icon" width={20} className="inline" />
          <span className="ml-2">Visit Repo</span>
        </a>
      </section>
      <div className="text-left py-0 px-5">
        <h3 className={h3}>How does this app work?</h3>
        <p className={p}>
          First, the app will generate random number from 1 to 731. 731 is the
          approximate amount of characters that the Superhero-API contains.
          Then, the app will fetch data from the API using the generated random
          number as the "id" of the character. Lastly, the app will calculate
          the power level of both the user character and the opponent character,
          then compare the values. The character which has higher power level
          wins the match.
        </p>
        <h3 className={h3}>Power Level Formula</h3>
        <p className={p}>
          Each character has powerstats that contain: Intelligence, Strength,
          Speed, Durability, Power, and Combat. The total power level are
          calculated based on the character's powerstats. The formula is 100% my
          idea. It is not based on any scientific formula. Well, it is what it
          is{" "}
          <span role="img" aria-label="Grinning Face with Sweat">
            😅
          </span>
        </p>
        <blockquote className="bg-gray-100 border-l-8 border-l-gray-300 my-6 mx-3 py-2 px-3 before:text-gray-300 before:text-base">
          Power Level = (Intelligence x 50) + (Strength x 30) + (Speed x 30) +
          (Durability x 20) + (Power x 100) + (Combat x 10)
        </blockquote>
        <h3 className={h3}>Win/Lose Error</h3>
        <p className={p}>
          Sometimes, the result is not like what you'd expect. I mean, how could
          this character wins over that character??? Well, in that case, there
          is something wrong in the character's powerstats. The data in the
          Superhero-API is not perfect. There are characters that have
          incomplete data. The incomplete data can be anything. In the "Win/Lose
          Error" scenario the incomplete data is the character's powerstats. The
          incomplete powerstats may fills with "null" for all the stats, that's
          why it could produce "inacurate" result.
        </p>
        <h3 className={`${h3} mt-4`}>The Assets This App Used</h3>
        <ul className="list-disc pl-10">
          <li>
            The Swords icon made by{" "}
            <a
              className={link}
              href="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
            >
              Good Ware
            </a>{" "}
            from{" "}
            <a
              className={link}
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              {" "}
              www.flaticon.com
            </a>
          </li>
          <li>
            The Batman, Iron man, and Man-avatar icons made by{" "}
            <a
              className={link}
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{" "}
            from{" "}
            <a
              className={link}
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
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
