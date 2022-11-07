import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getMovieByTitle } from "../services/movieApiService";
import "./Main.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [criteriaMovie, setCriteriaMovie] = useState();

  useEffect(() => {
    if (searchMovie !== "") {
      getMovieByTitle(searchMovie).then((res) => setMovies(res.results));
    }
  });
  return (
    <div className="Main">
      <SearchForm setTerm={setSearchMovie} />
      <ResultList movies={movies} />
    </div>
  );
};

export default Main;
