import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParamList, 'Details'> {}

export const DetailsScreen = (props: DetailsScreenProps) => {
  const { route } = props;
  const { movieId } = route.params;

  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!movie) {
    return (
      <View>
        <Text>No movie data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movie.poster}
        originalTitle={movie.originalTitle}
        title={movie.title}
      />
      <MovieDetails movie={movie} cast={cast} />
    </ScrollView>
  );
};
