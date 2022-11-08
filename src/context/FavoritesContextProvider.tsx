import { ReactNode, useState } from "react";
import FavoritesContext from "./FavoritesContext";
import Movie from "../models/Movie";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  console.log(favorites);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const isFav = (idToCheck: number): boolean => {
    return favorites.some((fav) => {
      return fav.id === idToCheck;
    });
  };

  const deleteFavorite = (idToDelete: number): void => {
    const index: number = favorites.findIndex((fav) => {
      return fav.id === idToDelete;
    });
    if (index !== -1) {
      setFavorites((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, isFav, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
