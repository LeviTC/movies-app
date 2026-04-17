import { MovieApi } from "@/core/api/movie-api";
import { TMDBMoviesResponse } from "@/infrastructure/interfaces/tmdb-response";
import { MovieMapper } from "@/infrastructure/mapers/movie.mapper";

interface Options {
  page?: number;
}


export const topRatedAction = async ({ page = 1}: Options) => {
    
  try {
    const { data } = await MovieApi.get<TMDBMoviesResponse>("/top_rated", {
      params: {
        page,
      }
    });
    const movies = data.results.map(MovieMapper.fromTMDBMovieToMovie);

    return movies;
  } catch (error) {
    throw error;
  }
}