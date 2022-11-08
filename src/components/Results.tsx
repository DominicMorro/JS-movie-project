import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Movie from "../models/Movie";
import Favorites from "./Favorites";
import "./Results.css";
interface Props {
  oneMovie: Movie;
}

const Results = ({ oneMovie }: Props) => {
  const { addFavorite, isFav, deleteFavorite } = useContext(FavoritesContext);
  console.log(oneMovie.poster_path);

  return (
    <li className="Results">
      <Link to={`/details/${oneMovie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
          alt={oneMovie.original_title}
        />
      </Link>

      <h3 className="movieTitle">{oneMovie.original_title}</h3>
      <p className="movieRating">{oneMovie.vote_average.toFixed(1)}</p>
      {!isFav(oneMovie.id) ? (
        <button
          className="addFav"
          onClick={() => {
            addFavorite(oneMovie);
          }}
        >
          &hearts;
        </button>
      ) : (
        <button
          className="fav"
          onClick={() => {
            deleteFavorite(oneMovie.id);
          }}
        >
          &#9940;
        </button>
      )}
    </li>
  );
};

export default Results;
