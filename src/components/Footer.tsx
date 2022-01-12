import { Link } from "react-router-dom";

import { LoveIcon } from "../assets/icons";
import love from "../assets/love.svg";

type FooterProps = {
  isTanding: boolean;
};

const Footer = ({ isTanding }: FooterProps) => {
  return (
    <footer className="bg-white text-center">
      <hr className="my-4" />
      {isTanding ? (
        <Link
          to="/about"
          className="py-3 px-6 mt-4 inline-block font-bold bg-transparent text-gray-600 leading-6 text-center align-middle border border-gray-500 rounded-md hover:bg-gray-500 hover:text-gray-100 duration-100"
        >
          Let's see how this app works
        </Link>
      ) : (
        <Link
          to="/"
          className="py-3 px-6 mt-4 inline-block font-bold bg-transparent text-gray-600 leading-6 text-center align-middle border border-gray-500 rounded-md hover:bg-gray-500 hover:text-gray-100 duration-100"
        >
          Back to the Match
        </Link>
      )}
      <div className="container my-4">
        <p className="inline-block">
          Built with <img src={love} alt="love icon" className="inline" /> by{" "}
          <a
            className="text-blue-500 hover:text-blue-700 hover:underline"
            href="https://halosatrio.now.sh"
          >
            Satrio Bayu Aji
          </a>{" "}
          @2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
