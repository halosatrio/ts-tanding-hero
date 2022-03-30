// import man from "../assets/man.png";

import { HeroData } from "../types/HeroData";

type TabelHeroUserProps = {
  heroUser1: HeroData | null;
  heroUser2: HeroData | null;
  heroUser3: HeroData | null;
  heroUser4: HeroData | null;
  handleClick: (arg: HeroData) => void;
  showTableHeroUser: boolean;
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
    <div className={`tabel-hero ${showTableHeroUser ? "block": "hidden"}`}>
      <h5 className="text-center mb-2">Select Your Character</h5>
      {loading ? (
        <figure className="loading-hero bg-gray-500 max-w-full rounded-2xl">
          <h2 className="py-65pct px-0 text-center text-4xl text-gray-200">
            Loading...
          </h2>
        </figure>
      ) : (
        <div className="flex flex-wrap justify-center my-6 items-center sm:px-2 md:px-4">
          <div className="basis-6/12 text-center px-1 sm:px-2">
            <img
              className="w-full"
              src={heroUser1?.image}
              alt={heroUser1?.name}
              onClick={heroUser1 ? () => handleClick(heroUser1) : () => {}}
            />
            <p className="text-xs mb-4">{heroUser1?.name}</p>
          </div>
          <div className="basis-6/12 text-center px-1 sm:px-2">
            <img
              className="w-full"
              src={heroUser2?.image}
              alt={heroUser2?.name}
              onClick={heroUser2 ? () => handleClick(heroUser2) : () => {}}
            />
            <p className="text-xs mb-4">{heroUser2?.name}</p>
          </div>
          <div className="basis-6/12 text-center px-1 sm:px-2">
            <img
              className="w-full"
              src={heroUser3?.image}
              alt={heroUser3?.name}
              onClick={heroUser3 ? () => handleClick(heroUser3) : () => {}}
            />
            <p className="text-xs mb-4">{heroUser3?.name}</p>
          </div>
          <div className="basis-6/12 text-center px-1 sm:px-2">
            <img
              className="w-full"
              src={heroUser4?.image}
              alt={heroUser4?.name}
              onClick={heroUser4 ? () => handleClick(heroUser4) : () => {}}
            />
            <p className="text-xs mb-4">{heroUser4?.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelHeroUser;
