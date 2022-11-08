import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./FavoritesContext.css";
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
console.log(Favorites);

export default Favorites;
