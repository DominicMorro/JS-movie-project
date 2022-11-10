// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Movie from "../models/Movie";
// import { getMovieRecommendations } from "../services/movieApiService";
// import "./RecommendedMovies.css";

// const RecommendedMovies = () => {
//   const id: string | undefined = useParams().id;
//   const [recommendedMovie, setRecommendedMovie] = useState<Movie[]>([]);
//   useEffect(() => {
//     getMovieRecommendations(id!).then((res) =>
//       setRecommendedMovie(res.results)
//     );
//   }, [id]);

//   return <div className="RecommendedMovies"></div>;
// };

// export default RecommendedMovies;

import Movie from "../models/Movie";
import "./RecommendedMovies.css";

interface Props {
  oneRec: Movie;
}

const RecommendedMovies = ({ oneRec }: Props) => {
  return (
    <li className="RecommendedMovies">
      {oneRec.poster_path}
      <p>{oneRec.original_title}</p>
    </li>
  );
};

export default RecommendedMovies;
