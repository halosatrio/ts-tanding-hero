import React from "react";

// import man from "../assets/man.png";

const TabelHeroUser = (props) => {
  const {
    heroUser1,
    heroUser2,
    heroUser3,
    heroUser4,
    handleClick,
    showTableHeroUser,
    loading,
  } = props;

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
              src={heroUser1.image}
              alt={heroUser1.name}
              onClick={() => handleClick(heroUser1)}
            />
            <p>{heroUser1.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser2.image}
              alt={heroUser2.name}
              onClick={() => handleClick(heroUser2)}
            />
            <p>{heroUser2.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser3.image}
              alt={heroUser3.name}
              onClick={() => handleClick(heroUser3)}
            />
            <p>{heroUser3.name}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser4.image}
              alt={heroUser4.name}
              onClick={() => handleClick(heroUser4)}
            />
            <p>{heroUser4.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabelHeroUser;
