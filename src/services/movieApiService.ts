import axios from "axios";
import SearchMovieResponse from "../models/SearchMovieResponse";
import SingleMovieResponse from "../models/SingularMovieResponse";
import TrendingMovieResponse from "../models/TrendingMovieResponse";
const apikey: string = process.env.REACT_APP_TMDB_API_KEY || "";

export const getTrendingMovies = (): Promise<TrendingMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week`, {
      params: { api_key: apikey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getSingleMovie = (id: number): Promise<SingleMovieResponse> => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: { api_key: apikey },
  });
};

export const getMovieByTitle = (
  title: string
): Promise<SearchMovieResponse> => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie
  `,
      { params: { api_key: apikey, query: title } }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
