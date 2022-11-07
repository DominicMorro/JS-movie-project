import Movie from "../models/Movie";
import "./ResultList.css";
import Results from "./Results";
interface Props {
  movies: Movie[];
}

const ResultList = ({ movies }: Props) => {
  return (
    <div className="ResultList">
      <ul>
        {movies.map((movie) => (
          <Results key={movie.id} oneMovie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
