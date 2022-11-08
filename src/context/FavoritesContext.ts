import { createContext } from "react";
import Movie from "../models/Movie";

interface FavoritesContextModel {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  isFav: (id: number) => boolean;
  deleteFavorite: (id: number) => void;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  isFav: () => false,
  deleteFavorite: () => {},
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
