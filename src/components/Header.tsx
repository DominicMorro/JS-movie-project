import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="webTitle">MovieBuffs</h1>
      <Link className="watchlistPage" to="/favorites">
        Watchlist
      </Link>
      <Link className="homePage" to="*">
        Home
      </Link>
    </header>
  );
};

export default Header;
