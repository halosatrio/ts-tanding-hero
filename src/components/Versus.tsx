import React, { useState } from "react";
import Modal from "react-modal";

import TabelHeroUser from "./TabelHeroUser";
import HeroUser from "./HeroUser";
import HeroLawan from "./HeroLawan";

import swords from "../assets/swords.png";
import { getHeroLawan, getHeroUser } from "../services/getHero";
import { randomNumber } from "../utils/generateRandom";
import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";

Modal.setAppElement("#root");
const Versus = (props) => {
  const className = [props.className];
  const { heroLawan, heroUser, handleResetHero, handleHeroRematch, loading } =
    props;

  const [heroUser1, heroUser2, heroUser3, heroUser4] = heroUser;

  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroLawan, setShowHeroLawan] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const powerLevelUser = calculatePowerLevel(selectedHero);
  const powerLevelLawan = calculatePowerLevel(heroLawan);

  const hasilTanding = bandingUserLawan(powerLevelUser, powerLevelLawan);

  const handleSelectHeroUser = (hero) => {
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
    const idLawan = randomNumber(1, 563);
    const idUser = [
      randomNumber(1, 563),
      randomNumber(1, 563),
      randomNumber(1, 563),
      randomNumber(1, 563),
    ];

    const [heroLawan, heroUser1, heroUser2, heroUser3, heroUser4] =
      await Promise.all([
        getHeroLawan(idLawan),
        getHeroUser(idUser[0]),
        getHeroUser(idUser[1]),
        getHeroUser(idUser[2]),
        getHeroUser(idUser[3]),
      ]);
    handleHeroRematch(heroLawan, heroUser1, heroUser2, heroUser3, heroUser4);
  };

  const showTableHeroUser = showTable ? "d-block" : "d-none";
  const showHeroUser = showTable ? "d-none" : "d-block";

  return (
    <div className={`versus ${className}`}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
      >
        <h2 className="mb-3">{hasilTanding}</h2>
        <button className="btn btn-secondary btn-sm" onClick={handleCloseModal}>
          close
        </button>
      </Modal>
      <div className="row justify-content-center my-4 align-items-center">
        <div className="col-5 col-lg-4">
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
        <div className="col-2 sword">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-5 col-lg-4">
          <HeroLawan
            heroLawan={heroLawan}
            showHeroLawan={showHeroLawan}
            powerLevelLawan={powerLevelLawan}
          />
        </div>
      </div>
      <div className="text-center mt-2 mb-4">
        <button
          className="btn btn-danger btn-lg"
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
