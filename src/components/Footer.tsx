import { Link } from "react-router-dom";

import { LoveIcon } from "../assets/icons";

type FooterProps = {
  isTanding: boolean;
};

const Footer = ({ isTanding }: FooterProps) => {
  return (
    <footer className="bg-white text-center">
      <hr />
      {isTanding ? (
        <Link
          to="/about"
          className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
        >
          Let's see how this app works
        </Link>
      ) : (
        <Link
          to="/"
          className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
        >
          Back to the Match
        </Link>
      )}
      <div className="container my-4">
        <p>
          Built with <LoveIcon color="crimson" /> by{" "}
          <a href="https://halosatrio.now.sh">Satrio Bayu Aji</a> @2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
