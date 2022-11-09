import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import { getSingleMovie } from "../services/movieApiService";
import "./Details.css";
import Results from "./Results";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    getSingleMovie(+id!).then((res) => setMovie(res.data));
  }, [id]);

  return (
    <div
      className="Details"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {movie ? (
        <Results oneMovie={movie} />
      ) : (
        <p className="pageLoading">loading...</p>
      )}
    </div>
  );
};

export default Details;
