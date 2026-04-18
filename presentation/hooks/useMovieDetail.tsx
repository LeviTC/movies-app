import { movieDetailAction } from "@/core/actions/movies/movie-detail.action";
import { useQuery } from "@tanstack/react-query";


export const useMovieDetail = (id: string | number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => movieDetailAction(id),
  });

  return { movieDetail: data, isLoading, error };
}
