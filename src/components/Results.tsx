import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Movie from "../models/Movie";
import Favorites from "./Favorites";
import "./Results.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  oneMovie: Movie;
}

const Results = ({ oneMovie }: Props) => {
  const { addFavorite, isFav, deleteFavorite } = useContext(FavoritesContext);
  console.log(oneMovie.poster_path);
  let percentage = (oneMovie.vote_average * 10).toFixed(0);
  let id: string | undefined = useParams().id;

  return (
    <li className="Results">
      <div className="movieTemplate">
        <div className="poster-percentage">
          <Link to={`/details/${oneMovie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
              alt={oneMovie.original_title}
            />
          </Link>
          <div className="progressBar">
            <CircularProgressbar
              className="movieRating"
              background={true}
              backgroundPadding={5}
              value={+percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#62D2A2",
                textColor: "#ffffff",
                trailColor: "#C0C0C0",
                backgroundColor: "#000000",
                textSize: "30px",
              })}
            />
          </div>
        </div>
        <h3 className="movieTitle">{oneMovie.original_title}</h3>
        {id && <p className="movieOverview">{oneMovie?.overview}</p>}

        {!isFav(oneMovie.id) ? (
          <button
            className="addFav"
            onClick={() => {
              addFavorite(oneMovie);
            }}
          >
            Add to Favorites &hearts;
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
      </div>
    </li>
  );
};

export default Results;
