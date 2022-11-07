import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getMovieByTitle } from "../services/movieApiService";
import CriteriaForm from "./CriteriaForm";
import "./Main.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchGenres, setSearchGenres] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [language, setLanguage] = useState("");
  console.log(searchMovie);

  // const [criteriaMovie, setCriteriaMovie] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchMovie !== "") {
      getMovieByTitle(searchMovie).then((res) => setMovies(res.results));
    }
    console.log(movies);
  }, [searchMovie]);
  return (
    <div className="Main">
      <SearchForm setTerm={setSearchMovie} />
      <CriteriaForm
        chooseGenre={setSearchGenres}
        chooseRating={setSearchRating}
        chooseLanguage={setLanguage}
      />
      <ResultList movies={movies} />
    </div>
  );
};

export default Main;
