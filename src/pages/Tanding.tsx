import { useEffect, useState } from "react";

// components
import Footer from "../components/Footer";
import Opening from "../components/Opening";
import TitleText from "../components/TitleText";
import Versus from "../components/Versus";

import { randomNumber } from "../utils/generateRandom";
import { fetchHero } from "../utils/getHero";

type HeroData = {
  name: string;
  image: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

const Tanding = () => {
  const [heroLawan, setHeroLawan] = useState<HeroData | null>(null);
  const [heloUser1, setHeloUser1] = useState<HeroData | null>(null);
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

  const handleStart = () => {
    setOpening(!opening);
  };

  return (
    <div className="container tanding">
      <TitleText />
      <Opening className={showOpening} handleStart={this.handleStart} />
      <Versus
        className={showVersus}
        heroLawan={heroLawan}
        heroUser={heroUser}
        handleResetHero={this.handleResetHero}
        handleHeroRematch={this.handleHeroRematch}
        loading={loading}
      />
      <Footer isTanding />
    </div>
  );
};

export default Tanding;
