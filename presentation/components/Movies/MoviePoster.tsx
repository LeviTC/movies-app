import { Image, Pressable } from 'react-native';

interface MoviePosterProps {
  id: number;
  poster: string;
  size?: 'small' | 'large';
  className?: string;
}

const MoviePoster = ({ id, poster, size = 'small', className }: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-80 px-2 ${className}`}
    >
      <Image 
        source={{ uri: poster }}
        className='rounded-2xl w-full h-full'
        style={{
          width: size === 'small' ? 85 : 150,
          height: size === 'small' ? 130 : 240,
        }}
        resizeMode='cover'
      />
    </Pressable>
  )
}

export default MoviePoster