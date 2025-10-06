import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';

interface MovieDetailsProps {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = (props: MovieDetailsProps) => {
  const { movie, cast } = props;

  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating}</Text>
          <Text style={{ marginLeft: 8 }}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={styles.title}>History</Text>
        <Text style={{ fontSize: 16, marginTop: 8 }}>{movie.description}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={{ fontSize: 18 }}>
          {Formatter.toCurrency(movie.budget)}
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginHorizontal: 20,
            ...styles.title,
          }}
        >
          Cast
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.castContainer}
          renderItem={({ item }) => <CastActor cast={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 16,
  },
  castContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
});
