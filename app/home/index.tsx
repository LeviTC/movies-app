import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
import MoviesCarousel from '@/presentation/components/Movies/MoviesCarousel';
import { useMovies } from '../../presentation/hooks/useMovies';

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets();

  const { nowPlayingMoviesQuery } = useMovies();

  if (nowPlayingMoviesQuery.isLoading) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{paddingTop: safeArea.top+10,}}>
      <Text className='text-2xl font-bold px-4 mb-2'>Movies App</Text>

      <MoviesCarousel movies={nowPlayingMoviesQuery.data || []} />
    </View>
  );
}

export default HomeScreen