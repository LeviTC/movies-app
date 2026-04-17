import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useCallback, useEffect, useRef } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View
} from 'react-native';
import MoviePoster from './MoviePoster';

/** Ancho fijo por ítem: px-2 (8+8) + imagen small (85) — debe coincidir con MoviePoster */
const HORIZONTAL_POSTER_ITEM_LENGTH = 101;

interface MovieHorizontalListProps {
  movies?: Movie[];
  title?: string;
  loadMore?: () => void;
}

const getItemLayout = (_data: ArrayLike<Movie> | null | undefined, index: number) => ({
  length: HORIZONTAL_POSTER_ITEM_LENGTH,
  offset: HORIZONTAL_POSTER_ITEM_LENGTH * index,
  index,
});

const MovieHorizontalList = ({ movies, title, loadMore }: MovieHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    isLoading.current = false;
  }, [movies?.length]);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (isLoading.current || !loadMore) return;

      const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
      const isCloseToEnd =
        contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

      if (!isCloseToEnd) return;

      isLoading.current = true;
      loadMore?.();
    },
    [loadMore],
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Movie>) => {
    return <MoviePoster id={item.id} poster={item.poster} size="small" />;
  }, []);

  const keyExtractor = useCallback((item: Movie) => String(item.id), []);

  return (
    <View className="mb-4">
      {title ? <Text className="text-3xl font-medium px-4 mb-2">{title}</Text> : null}

      <FlatList
        horizontal
        data={movies ?? []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={64}
        windowSize={5}
        maxToRenderPerBatch={8}
        initialNumToRender={8}
        removeClippedSubviews
      />
    </View>
  );
};

export default MovieHorizontalList;
