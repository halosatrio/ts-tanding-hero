import batman from "../assets/batman.png";
import ironman from "../assets/ironman.png";
import swords from "../assets/swords.png";

type OpeningProps = {
  className: string;
  handleStart: () => void;
};

const Opening = ({ className, handleStart }: OpeningProps) => {
  return (
    <div className={`opening ${className}`}>
      <div className="row justify-content-around my-4 align-items-center">
        <div className="col-5 col-lg-4 opening-kiri">
          <img src={ironman} alt="batman" />
        </div>
        <div className="col-2">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-5 col-lg-4">
          <img src={batman} alt="batman" />
        </div>
      </div>
      <div className="text-center my-3">
        <button
          className="btn btn-danger btn-lg"
          style={{ paddingLeft: 50, paddingRight: 50 }}
          onClick={handleStart}
        >
          S T A R T
        </button>
      </div>
      <h3 className="text-center">
        Superhero Match using{" "}
        <a href="https://www.superheroapi.com/">Superhero-API</a>
      </h3>
      <h6 className="text-center">
        Both your character and the opponent character are generated randomly
      </h6>
    </div>
  );
};

export default Opening;
