import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
import MovieHorizontalList from '@/presentation/components/Movies/MovieHorizontalList';
import MoviesCarousel from '@/presentation/components/Movies/MoviesCarousel';
import { useMovies } from '../../presentation/hooks/useMovies';

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets();

  const { nowPlayingMoviesQuery, popularMoviesQuery, topRatedMoviesQuery, upcomingMoviesQuery } = useMovies();

  if (nowPlayingMoviesQuery.isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const popularMovies = popularMoviesQuery.data;

  const topRatedMovies = topRatedMoviesQuery.data;
  const upcomingMovies = upcomingMoviesQuery.data;

  return (
    <ScrollView >
      <View style={{paddingTop: safeArea.top+10,}} className='pb-10'>
        <Text className='text-3xl font-bold px-4 '>Movies App</Text>

        {/* Now Playing Movies */}
        <MoviesCarousel movies={nowPlayingMoviesQuery.data || []} />
        
        {/* Popular Movies */}
        <MovieHorizontalList movies={popularMovies} title='Popular' />

        {/* Top Rated Movies */}
        <MovieHorizontalList 
          movies={topRatedMovies?.pages.flat() || []} 
          title='Top Rated' 
          loadMore={topRatedMoviesQuery.fetchNextPage}
        />

        {/* Upcoming Movies */}
        <MovieHorizontalList movies={upcomingMovies} title='Upcoming' />
      </View>
    </ScrollView>
  );
}

export default HomeScreen