import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMovieRecommendations,
  getSingleMovie,
} from "../services/movieApiService";
import "./Details.css";
import RecommendedMovies from "./RecommendedMovies";
import Results from "./Results";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [movie, setMovie] = useState<Movie>();
  const [recommendations, setRecommended] = useState<Movie[]>([]);
  useEffect(() => {
    getSingleMovie(+id!).then((res) => setMovie(res.data));
    getMovieRecommendations(id!).then((res) => setRecommended(res.results));
  }, [id]);

  return (
    <div
      className="Details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section>
        {movie ? (
          <Results oneMovie={movie} />
        ) : (
          <p className="pageLoading">loading...</p>
        )}
      </section>
      <section>
        {recommendations ? (
          <ul className="recommended-movies-list">
            {recommendations.map((rec) => (
              <Results key={rec.id} oneMovie={rec} />
            ))}
          </ul>
        ) : (
          <p>loading...</p>
        )}
      </section>
    </div>
  );
};

export default Details;
