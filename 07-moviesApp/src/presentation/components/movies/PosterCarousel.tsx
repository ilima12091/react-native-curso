import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface PosterCarouselProps {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = (props: PosterCarouselProps) => {
  const { movies, height = 440 } = props;

  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.postersContainer}>
          {movies.map(movie => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  postersContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 20,
  },
});
