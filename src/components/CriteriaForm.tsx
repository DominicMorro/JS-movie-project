import { FormEvent, useState } from "react";
import Movie from "../models/Movie";
import "./CriteriaForm.css";

interface Props {
  // setCriteria: (something: Movie[]) => void;
  chooseGenre: (genre: string) => void;
  chooseRating: (rating: string) => void;
  chooseLanguage: (language: string) => void;
}

const CriteriaForm = ({ chooseGenre, chooseRating, chooseLanguage }: Props) => {
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLanguage] = useState("");

  const criteriaSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    chooseGenre(genre);
    chooseRating(rating);
    chooseLanguage(language);
  };

  return (
    <form className="CriteriaForm" onSubmit={criteriaSubmitHandler}>
      <label htmlFor="genre">Genre</label>
      <select
        name="genre"
        id="genre"
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      >
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>
      <label htmlFor="rating">Average Rating</label>
      <input
        type="range"
        id="rating"
        name="rating"
        min="0"
        max="10"
        step="0.5"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />
      <p className={`${+rating <= 5 ? "red" : ""}`}>{rating}</p>
      <select
        name="language"
        id="language"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="jv">Japanese</option>
        <option value="no">Norwegian</option>
        <option value="zh">Chinese</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default CriteriaForm;
