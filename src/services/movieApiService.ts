import axios from "axios";
import CriteriaResponse from "../models/CriteriaResponse";
import SearchMovieResponse from "../models/SearchMovieResponse";
import SingleMovieResponse from "../models/SingularMovieResponse";
import TrendingMovieResponse from "../models/TrendingMovieResponse";
const apiKey: string = process.env.REACT_APP_TMDB_API_KEY || "";

export const getTrendingMovies = (): Promise<TrendingMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week`, {
      params: { api_key: apiKey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getSingleMovie = (id: number): Promise<SingleMovieResponse> => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: { api_key: apiKey },
  });
};

export const getMovieByTitle = (
  title: string
): Promise<SearchMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/search/movie`, {
      params: { api_key: apiKey, query: title },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getMovieByCriteria = (
  withGenres?: string,
  average_vote?: number,
  language?: string
): Promise<CriteriaResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: apiKey,
        with_genres: withGenres,
        "vote_average.gte": average_vote,
        with_original_language: language,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
