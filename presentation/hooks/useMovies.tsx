import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.action";
import { upcomingAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";


export const useMovies = () => {
  const nowPlayingMoviesQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularMoviesQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'topRated'],
    queryFn: ({pageParam}) => {
      return topRatedAction({ page: pageParam });
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    staleTime: 1000 * 60 * 60 * 24,
  });
    
  const upcomingMoviesQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });


  return {
    nowPlayingMoviesQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  }
}