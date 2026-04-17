import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface MovieHorizontalListProps {
  movies?: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: MovieHorizontalListProps) => {
  return (
    <View className='mb-4'>
      {title && (
        <Text className='text-3xl font-medium px-4 mb-2'>{title}</Text>
      )}

      <FlatList 
        horizontal
        data={movies}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} size='small' />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieHorizontalList