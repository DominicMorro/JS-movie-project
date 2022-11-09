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
  const [buttonText, setButtonText] = useState("Criteria");
  const switchForm = () => {
    setShowCriteria((prev) => !prev);
    setSearchMovie("");
    setSearchGenres("");
    setSearchRating("");
    setLanguage("");
    buttonText !== "Criteria"
      ? setButtonText("Criteria")
      : setButtonText("Title");
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
      <div className="toolbarContainer">
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
      </div>
      <section className="list">
        <ResultList movies={movies} />
      </section>
    </div>
  );
};

export default Main;
