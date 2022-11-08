import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import Results from "./Results";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <ul className="Favorites">
      {favorites.map((fav) => (
        <Results key={fav.id} oneMovie={fav} />
      ))}
    </ul>
  );
};

export default Favorites;
