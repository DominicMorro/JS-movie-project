import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  getMovieByTitle,
  getSingleMovie,
  getTrendingMovies,
} from "./services/movieApiService";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
