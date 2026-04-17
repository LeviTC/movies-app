import { memo, useMemo } from 'react';
import { Image, Pressable } from 'react-native';

interface MoviePosterProps {
  id: number;
  poster: string;
  size?: 'small' | 'large';
  className?: string;
}

const MoviePoster = ({ id, poster, size = 'small', className }: MoviePosterProps) => {
  const imageStyle = useMemo(
    () => ({
      width: size === 'small' ? 85 : 150,
      height: size === 'small' ? 130 : 240,
    }),
    [size],
  );

  const source = useMemo(() => ({ uri: poster }), [poster]);

  return (
    <Pressable
      className={`active:opacity-80 px-2 ${className ?? ''}`}
    >
      <Image
        source={source}
        className='rounded-2xl w-full h-full'
        style={imageStyle}
        resizeMode='cover'
      />
    </Pressable>
  );
};

export default memo(MoviePoster);