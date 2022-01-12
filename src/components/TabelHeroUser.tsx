// import man from "../assets/man.png";

import { HeroData } from "../types/HeroData";

type TabelHeroUserProps = {
  heroUser1: HeroData | null;
  heroUser2: HeroData | null;
  heroUser3: HeroData | null;
  heroUser4: HeroData | null;
  handleClick: (arg: HeroData) => void;
  showTableHeroUser: string;
  loading: boolean;
};
const TabelHeroUser = ({
  heroUser1,
  heroUser2,
  heroUser3,
  heroUser4,
  handleClick,
  showTableHeroUser,
  loading,
}: TabelHeroUserProps) => {
  return (
    <div className={`tabel-hero ${showTableHeroUser}`}>
      <h5 className="text-center mb-2">Select Your Character</h5>
      {loading ? (
        <figure className="loading-hero">
          <h2>Loading...</h2>
        </figure>
      ) : (
        <div className="row row-cols-2 px-2 px-sm-2 px-md-3">
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser1?.image}
              alt={heroUser1?.name}
              onClick={heroUser1 ? () => handleClick(heroUser1) : () => {}}
            />
            <p>{heroUser1?.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser2?.image}
              alt={heroUser2?.name}
              onClick={heroUser2 ? () => handleClick(heroUser2) : () => {}}
            />
            <p>{heroUser2?.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser3?.image}
              alt={heroUser3?.name}
              onClick={heroUser3 ? () => handleClick(heroUser3) : () => {}}
            />
            <p>{heroUser3?.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser4?.image}
              alt={heroUser4?.name}
              onClick={heroUser4 ? () => handleClick(heroUser4) : () => {}}
            />
            <p>{heroUser4?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelHeroUser;
