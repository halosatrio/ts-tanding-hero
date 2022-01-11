import { useState } from "react";

import man from "../assets/man.png";

type HeroLawanProps = {
  heroLawan: {
    name: string;
    image: string;
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
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
      {showHeroLawan ? (
        <figure>
          <img src={heroLawan.image} alt={heroLawan.name} />
          <h4>{heroLawan.name}</h4>
          <button className="btn btn-secondary mt-3" onClick={handleShowStats}>
            show stats
          </button>
          {showStats ? (
            <div className="stats-lawan text-left mt-2">
              <ul>
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
        <div className="gray-man">
          <img src={man} alt="man" />
        </div>
      )}
    </div>
  );
};

export default HeroLawan;
