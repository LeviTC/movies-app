import { MovieApi } from "@/core/api/movie-api";
import { MovieResponse } from "@/infrastructure/interfaces/tmdb-movie.response";
import { MovieMapper } from "@/infrastructure/mapers/movie.mapper";


export const movieDetailAction = async (id: string | number) => {
    
  try {
    const { data } = await MovieApi.get<MovieResponse>(`/${id}`);
    const movieDetail = MovieMapper.fromTMDBMovieToMovieDetail(data);

    return movieDetail;

  } catch (error) {
    throw error;
  }
}