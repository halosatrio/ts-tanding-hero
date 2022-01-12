import batman from "../assets/batman.png";
import ironman from "../assets/ironman.png";
import swords from "../assets/swords.png";

type OpeningProps = {
  className: string;
  handleStart: () => void;
};

const Opening = ({ className, handleStart }: OpeningProps) => {
  return (
    <div className={`my-6 font-sans ${className}`}>
      <div className="flex flex-row px-6 lg:my-8 items-center justify-around">
        <div className="basis-5/12 lg:basis-4/12 px-4">
          <img className="w-full" src={ironman} alt="batman" />
        </div>
        <div className="basis-2/12 px-4">
          <img className="w-full" src={swords} alt="batman" />
        </div>
        <div className="basis-5/12 lg:basis-4/12 px-4">
          <img className="w-full" src={batman} alt="batman" />
        </div>
      </div>
      <div className="text-center my-4">
        <button
          className="py-2 px-12 bg-red-600 text-white border border-red-500 leading-8 inline-block text-xl text-center align-middle rounded-md hover:bg-red-700 duration-100"
          onClick={handleStart}
        >
          S T A R T
        </button>
      </div>
      <h3 className="text-center text-3xl mb-2">
        Superhero Match using{" "}
        <a
          className="text-blue-500 hover:text-blue-700 hover:underline"
          href="https://www.superheroapi.com/"
        >
          Superhero-API
        </a>
      </h3>
      <h6 className="text-center">
        Both your character and the opponent character are generated randomly
      </h6>
    </div>
  );
};

export default Opening;
