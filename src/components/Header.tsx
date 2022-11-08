import { Link } from "react-router-dom";
import "./Header.css";
import filmCamera from "../assets/movie-camera.svg";

const Header = () => {
  return (
    <header className="Header">
      <div className="logoDiv">
        <img className="leftCamera" src={filmCamera} alt="" />
        <h1 className="webTitle">MovieBuffs</h1>
        <img className="rightCamera" src={filmCamera} alt="" />
      </div>
      <div className="navDiv">
        <Link className="watchlistPage" to="/favorites">
          Watchlist
        </Link>
        <Link className="homePage" to="*">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
