import { useState } from "react";
import Modal from "react-modal";

import TabelHeroUser from "./TabelHeroUser";
import HeroUser from "./HeroUser";
import HeroLawan from "./HeroLawan";

import swords from "../assets/swords.png";
import { fetchHero } from "../utils/fetchHero";
import { randomNumber } from "../utils/generateRandom";
import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";
import { HeroData } from "../types/HeroData";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

type VersusProps = {
  className: string;
  heroLawan: HeroData | null;
  heroUser: (HeroData | null)[];
  handleResetHero: () => void;
  handleHeroRematch: <T extends HeroData | null>(
    arg1: T,
    arg2: T,
    arg3: T,
    arg4: T,
    arg5: T
  ) => void;
  loading: boolean;
};

const Versus = ({
  className,
  heroLawan,
  heroUser,
  handleResetHero,
  handleHeroRematch,
  loading,
}: VersusProps) => {
  const [heroUser1, heroUser2, heroUser3, heroUser4] = heroUser;

  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState<HeroData | null>(null);
  const [showHeroLawan, setShowHeroLawan] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const powerLevelUser = calculatePowerLevel(selectedHero);
  const powerLevelLawan = calculatePowerLevel(heroLawan);

  const hasilTanding = bandingUserLawan(powerLevelUser, powerLevelLawan);

  const handleSelectHeroUser = (hero: HeroData) => {
    setShowTable(!showTable);
    setShowHeroLawan(!showHeroLawan);
    setSelectedHero(hero);
    setTimeout(handleOpenModal, 1000);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleRematch = async () => {
    setShowTable(true);
    setShowHeroLawan(false);
    setSelectedHero(null);

    handleResetHero();
    const idLawan = randomNumber(1, 730);
    const idUser = [
      randomNumber(1, 730),
      randomNumber(1, 730),
      randomNumber(1, 730),
      randomNumber(1, 730),
    ];

    const [heroLawan, heroUser1, heroUser2, heroUser3, heroUser4] =
      await Promise.all([
        fetchHero(idLawan),
        fetchHero(idUser[0]),
        fetchHero(idUser[1]),
        fetchHero(idUser[2]),
        fetchHero(idUser[3]),
      ]);
    handleHeroRematch(heroLawan, heroUser1, heroUser2, heroUser3, heroUser4);
  };

  const showTableHeroUser = showTable ? "block" : "hidden";
  const showHeroUser = showTable ? "hidden" : "block";

  let appRoot = document.querySelector('#app')

  return (
    <div className={`versus ${className}`}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
      >
        <h2 className="mb-3">{hasilTanding}</h2>
        <button
          className="py-1 px-2 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600"
          onClick={handleCloseModal}
        >
          close
        </button>
      </Modal>
      <div className="flex flex-row justify-center my-6 items-center">
        <div className="basis-5/12 lg:basis-4/12 px-4">
          <TabelHeroUser
            heroUser1={heroUser1}
            heroUser2={heroUser2}
            heroUser3={heroUser3}
            heroUser4={heroUser4}
            handleClick={handleSelectHeroUser}
            showTableHeroUser={showTableHeroUser}
            loading={loading}
          />
          <HeroUser
            showHeroUser={showHeroUser}
            selectedHero={selectedHero}
            powerLevelUser={powerLevelUser}
          />
        </div>
        <div className="basis-2/12 sword">
          <img src={swords} alt="batman" />
        </div>
        <div className="basis-5/12 lg:basis-4/12 px-4">
          <HeroLawan
            heroLawan={heroLawan}
            showHeroLawan={showHeroLawan}
            powerLevelLawan={powerLevelLawan}
          />
        </div>
      </div>
      <div className="text-center mt-2 mb-4">
        <button
          className="py-2 px-12 bg-red-600 text-white border border-red-500 leading-8 inline-block text-xl text-center align-middle rounded-md hover:bg-red-700 duration-100"
          style={{ paddingLeft: 50, paddingRight: 50 }}
          onClick={handleRematch}
        >
          R E M A T C H
        </button>
      </div>
    </div>
  );
};

export default Versus;
