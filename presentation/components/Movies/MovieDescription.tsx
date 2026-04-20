import { Formatter } from '@/config/helpers/formatter';
import { MovieDetail } from '@/infrastructure/interfaces/movie.interface';
import { Text, View } from 'react-native';

interface MovieDescriptionProps {
  movie: MovieDetail
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className='mt-2'>{movie.description}</Text>

      <Text className='font-bold mt-2 text-2xl'>
        Budget
      </Text>
      <Text className='font-bold text-xl text-gray-500'>
        {Formatter.formatCurrency(movie.budget)}
      </Text>
    </View>
  )
}

export default MovieDescription