import { useEffect, useState } from "react";

// components
import Footer from "../components/Footer";
import Opening from "../components/Opening";
import TitleText from "../components/TitleText";
import Versus from "../components/Versus";

import { randomNumber } from "../utils/generateRandom";
import { fetchHero } from "../utils/fetchHero";
import { HeroData } from "../types/HeroData";

const Tanding = () => {
  const [heroLawan, setHeroLawan] = useState<HeroData | null>(null);
  const [heroUser1, setHeloUser1] = useState<HeroData | null>(null);
  const [heroUser2, setHeroUser2] = useState<HeroData | null>(null);
  const [heroUser3, setHeroUser3] = useState<HeroData | null>(null);
  const [heroUser4, setHeroUser4] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(false);
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    const idLawan = randomNumber(1, 731);
    const idUser = [
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
    ];
    async function fetchAll() {
      setLoading(true);
      const [lawan, user1, user2, user3, user4] = await Promise.all([
        fetchHero(idLawan),
        fetchHero(idUser[0]),
        fetchHero(idUser[1]),
        fetchHero(idUser[2]),
        fetchHero(idUser[3]),
      ]);

      setHeroLawan(lawan);
      setHeloUser1(user1);
      setHeroUser2(user2);
      setHeroUser3(user3);
      setHeroUser4(user4);
    }

    fetchAll();
    setLoading(false);
  }, []);

  // Handlers
  const handleStart = () => {
    setOpening(!opening);
  };

  const handleResetHero = () => {
    setHeroLawan(null);
    setHeloUser1(null);
    setHeroUser2(null);
    setHeroUser3(null);
    setHeroUser4(null);
  };

  const handleHeroRematch = <T extends HeroData | null>(
    heroLawan: T,
    heroUser1: T,
    heroUser2: T,
    heroUser3: T,
    heroUser4: T
  ) => {
    setHeroLawan(heroLawan);
    setHeloUser1(heroUser1);
    setHeroUser2(heroUser2);
    setHeroUser3(heroUser3);
    setHeroUser4(heroUser4);
  };

  // display/hidden logic using tailwind css
  const showOpening = opening ? "block" : "hidden";
  const showVersus = opening ? "hidden" : "block";

  const heroUser = [heroUser1, heroUser2, heroUser3, heroUser4];

  return (
    <div className="container mx-auto tanding max-w-6xl">
      <TitleText />
      <Opening className={showOpening} handleStart={handleStart} />
      <Versus
        className={showVersus}
        heroLawan={heroLawan}
        heroUser={heroUser}
        handleResetHero={handleResetHero}
        handleHeroRematch={handleHeroRematch}
        loading={loading}
      />
      <Footer isTanding />
    </div>
  );
};

export default Tanding;
