import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../../core/entities/cast.entity';

interface CastActorProps {
  cast: Cast;
}

export const CastActor = (props: CastActorProps) => {
  const { cast } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: cast.avatar }} style={styles.image} />
      <View style={styles.castInfo}>
        <Text style={styles.castName}>{cast.name}</Text>
        <Text style={styles.castCharacter}>{cast.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  castInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  castName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  castCharacter: {
    fontSize: 12,
    opacity: 0.7,
  },
});
