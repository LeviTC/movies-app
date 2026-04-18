import MoviewHeader from '@/presentation/components/Movies/MoviewHeader';
import { useMovieDetail } from '@/presentation/hooks/useMovieDetail';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {

  const { id } = useLocalSearchParams();

  const { movieDetail, isLoading } = useMovieDetail(id as string);
  

  if (isLoading || !movieDetail) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='mb-4'>Please wait...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
   <ScrollView>
    <MoviewHeader 
      poster={movieDetail.poster} 
      originalTitle={movieDetail.originalTitle} 
      title={movieDetail.title}
    />
   </ScrollView>
  )
}

export default MovieScreen