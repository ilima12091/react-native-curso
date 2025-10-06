import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = (props: MoviePosterProps) => {
  const { movie, height = 400, width = 260 } = props;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressMovie = () => {
    navigation.navigate('Details', {
      movieId: movie.id,
    });
  };

  return (
    <Pressable
      onPress={onPressMovie}
      style={({ pressed }) => ({
        opacity: pressed ? 0.8 : 1,
        paddingBottom: 20,
      })}
    >
      <View style={{ ...styles.imageContainer, height, width }}>
        <Image
          style={styles.image}
          source={{
            uri: movie.poster,
          }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
