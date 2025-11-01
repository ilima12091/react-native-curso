import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, Text, TextInput } from 'react-native-paper';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { useQuery } from '@tanstack/react-query';
import {
  getPokemonNamesWithId,
  getPokemonsByIds,
} from '../../../actions/pokemons';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const debouncedValue = useDebouncedValue(term, 500);

  const { data: pokemonNameList, isLoading } = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    if (!pokemonNameList) {
      return [];
    }

    if (!Number.isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNameList.find(
        p => p.id === Number(debouncedValue),
      );
      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) {
      return [];
    }

    if (debouncedValue.length < 3) {
      return [];
    }

    return pokemonNameList.filter(p =>
      p.name.includes(debouncedValue.toLowerCase()),
    );
  }, [debouncedValue, pokemonNameList]);

  const onChangeText = (text: string) => {
    setTerm(text);
  };

  const { isLoading: isLoadingPokemons, data: pokemons = [] } = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () => getPokemonsByIds(pokemonNameIdList.map(p => p.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, { marginTop: top + 16 }]}>
      <TextInput
        placeholder="Buscar pokemon"
        mode="outlined"
        autoCorrect={false}
        onChangeText={onChangeText}
        value={term}
        autoFocus
      />
      {isLoadingPokemons && <ActivityIndicator style={{ marginTop: 16 }} />}
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => `${pokemon.id}-${pokemon.name}`}
        numColumns={2}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
          marginTop: 16,
        }}
      />
    </View>
  );
};
