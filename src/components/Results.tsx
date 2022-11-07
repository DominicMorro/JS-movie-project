import Movie from "../models/Movie";
import "./Results.css";
interface Props {
  oneMovie: Movie;
}

const Results = ({ oneMovie }: Props) => {
  console.log(oneMovie.poster_path);

  return (
    <li className="Results">
      <img
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        alt={oneMovie.original_title}
      />
      <h3>{oneMovie.original_title}</h3>
      <p>{oneMovie.vote_average}</p>
    </li>
  );
};

export default Results;
