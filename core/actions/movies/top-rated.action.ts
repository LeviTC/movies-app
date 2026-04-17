import { MovieApi } from "@/core/api/movie-api";
import { TMDBMoviesResponse } from "@/infrastructure/interfaces/tmdb-response";
import { MovieMapper } from "@/infrastructure/mapers/movie.mapper";


export const topRatedAction = async () => {
    
  try {
    const { data } = await MovieApi.get<TMDBMoviesResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTMDBMovieToMovie);

    return movies;
  } catch (error) {
    throw error;
  }
}