import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import {
  getMovieByCriteria,
  getMovieByTitle,
  getTrendingMovies,
} from "../services/movieApiService";
import CriteriaForm from "./CriteriaForm";
import Favorites from "./Favorites";
import "./Main.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchGenres, setSearchGenres] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [language, setLanguage] = useState("");
  const [showCriteria, setShowCriteria] = useState(false);
  const [buttonText, setButtonText] = useState("Search by Criteria");
  const switchForm = () => {
    setShowCriteria((prev) => !prev);
    setSearchMovie("");
    setSearchGenres("");
    setSearchRating("");
    setLanguage("");
    buttonText !== "Search by Criteria"
      ? setButtonText("Search by Criteria")
      : setButtonText("Search by Title");
  };
  console.log(searchMovie);

  // const [criteriaMovie, setCriteriaMovie] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchMovie !== "") {
      getMovieByTitle(searchMovie).then((res) => setMovies(res.results));
    } else {
      getTrendingMovies().then((res) => setMovies(res.results));
    }
    console.log(movies);
  }, [searchMovie]);
  useEffect(() => {
    if (searchGenres || searchRating || language) {
      getMovieByCriteria(searchGenres, +searchRating, language).then((res) =>
        setMovies(res.results)
      );
    } else if (searchRating !== "") {
    }
  }, [searchGenres, searchRating, language]);
  return (
    <div className="Main">
      <div className="toolBar">
        <button className="switchFormBtn" onClick={switchForm}>
          {buttonText}
        </button>
        {!showCriteria ? (
          <SearchForm setTerm={setSearchMovie} />
        ) : (
          <CriteriaForm
            chooseGenre={setSearchGenres}
            chooseRating={setSearchRating}
            chooseLanguage={setLanguage}
          />
        )}
      </div>
      <ResultList movies={movies} />
      <Favorites />
    </div>
  );
};

export default Main;
