import { Movie, MovieDetail } from "../interfaces/movie.interface";
import { MovieResponse } from "../interfaces/tmdb-movie.response";
import { Result } from "../interfaces/tmdb-response";

export class MovieMapper {
  static fromTMDBMovieToMovie(movie: Result): Movie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fromTMDBMovieToMovieDetail(movie: MovieResponse): MovieDetail {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      budget: movie.budget,
      duration: movie.runtime,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(company => company.name),
      genres: movie.genres.map((genre) => genre.name),
    };
  };
}