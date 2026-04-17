import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';
interface CarouselProps {
  movies: Movie[];
}

const MoviesCarousel = ({ movies }: CarouselProps) => {

  const carouselRef = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;




  return (
    <View className='h-[250px] w-full'>
      <Carousel 
        ref={carouselRef}
        data={movies}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} size='large' />}
        width={200}
        height={350}
        style={{ 
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
        autoPlay
        autoPlayInterval={3000}
      />
    </View>
  )
}

export default MoviesCarousel