import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, data: pokemons = [] } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[globalTheme.globalMargin, { marginTop: top + 16 }]}>
      <PokeballBg style={styles.imagePosition} />
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => `${pokemon.id}-${pokemon.name}`}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokédex</Text>}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
