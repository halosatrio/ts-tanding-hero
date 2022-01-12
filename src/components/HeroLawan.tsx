import { useState } from "react";
import { HeroData } from "../types/HeroData";

import man from "../assets/man.png";

type HeroLawanProps = {
  heroLawan: null | HeroData;
  showHeroLawan: boolean;
  powerLevelLawan: number;
};

const HeroLawan = ({
  heroLawan,
  showHeroLawan,
  powerLevelLawan,
}: HeroLawanProps) => {
  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="hero-lawan text-center">
      <h5 className="text-center mb-2">Opponent Character</h5>
      {heroLawan && showHeroLawan ? (
        <figure>
          <img className="w-full" src={heroLawan.image} alt={heroLawan.name} />
          <h4>{heroLawan.name}</h4>
          <button
            className="py-2 px-4 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600 mt-4"
            onClick={handleShowStats}
          >
            show stats
          </button>
          {showStats ? (
            <div className="border border-gray-500 rounded-lg py-3 px-0 text-left mt-2">
              <ul className="list-disc pl-8">
                <li>Total Power Level: {powerLevelLawan}</li>
                <li>Intelligence: {heroLawan.intelligence}</li>
                <li>Strength: {heroLawan.strength}</li>
                <li>Speed: {heroLawan.speed}</li>
                <li>Durability: {heroLawan.durability}</li>
                <li>Power: {heroLawan.power}</li>
                <li>Combat: {heroLawan.combat}</li>
              </ul>
            </div>
          ) : null}
        </figure>
      ) : (
        <div className="bg-gray-500 max-w-full rounded-2xl">
          <img
            className="mx-auto max-w-80pct py-35pct px-0"
            src={man}
            alt="man"
          />
        </div>
      )}
    </div>
  );
};

export default HeroLawan;
