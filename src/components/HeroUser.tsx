import { useState } from "react";
import { HeroData } from "../types/HeroData";

type HeroUserProps = {
  selectedHero: null | HeroData;
  showHeroUser: string;
  powerLevelUser: number;
};

const HeroUser = ({
  showHeroUser,
  selectedHero,
  powerLevelUser,
}: HeroUserProps) => {
  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className={`hero-user text-center ${showHeroUser}`}>
      <h5 className="text-center mb-2">Your Character</h5>
      {selectedHero ? (
        <figure>
          <img src={selectedHero.image} alt={selectedHero.name} />
          <h4>{selectedHero.name}</h4>
          <button
            className="py-2 px-4 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600 mt-4"
            onClick={handleShowStats}
          >
            show stats
          </button>
          {showStats ? (
            <div className="border border-gray-500 rounded-lg py-3 px-0 text-left mt-2">
              <ul className="list-disc pl-8">
                <li>Total Power Level: {powerLevelUser}</li>
                <li>Intelligence: {selectedHero.intelligence}</li>
                <li>Strength: {selectedHero.strength}</li>
                <li>Speed: {selectedHero.speed}</li>
                <li>Durability: {selectedHero.durability}</li>
                <li>Power: {selectedHero.power}</li>
                <li>Combat: {selectedHero.combat}</li>
              </ul>
            </div>
          ) : null}
        </figure>
      ) : (
        <p>No Hero Selected!</p>
      )}
    </div>
  );
};

export default HeroUser;
