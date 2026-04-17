import { MovieApi } from "@/core/api/movie-api";
import { TMDBMoviesResponse } from "@/infrastructure/interfaces/tmdb-response";
import { MovieMapper } from "@/infrastructure/mapers/movie.mapper";


export const upcomingAction = async () => {
    
  try {
    const { data } = await MovieApi.get<TMDBMoviesResponse>("/upcoming");
    const movies = data.results.map(MovieMapper.fromTMDBMovieToMovie);

    return movies;
  } catch (error) {
    throw error;
  }
}