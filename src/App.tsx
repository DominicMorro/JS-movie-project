import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  getMovieByTitle,
  getSingleMovie,
  getTrendingMovies,
} from "./services/movieApiService";

function App() {
  getMovieByTitle("Black").then((res) => console.log(res));
  return <div className="App"></div>;
}

export default App;
