import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getPokemons } from '../../../actions/pokemons';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { globalTheme } from '../../../config/theme/global-theme';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { useThemeContext } from '../../context/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';

interface HomeScreenProps
  extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = (props: HomeScreenProps) => {
  const { navigation } = props;

  const { top } = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const { theme, isDark } = useThemeContext();

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const pokemons = await getPokemons(pageParam);
      for (const pokemon of pokemons) {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon);
      }

      return pokemons;
    },
    getNextPageParam: (lastPage, allPages) => allPages.length,
    staleTime: 1000 * 60 * 5,
  });

  const onNavigateToSearch = () => {
    navigation.navigate('SearchScreen');
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, { marginTop: top + 16 }]}>
      <PokeballBg style={styles.imagePosition} />
      <FlatList
        data={data?.pages?.flat() ?? []}
        keyExtractor={pokemon => `${pokemon.id}-${pokemon.name}`}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokédex</Text>}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        label="Buscar"
        style={[
          globalTheme.fab,
          {
            backgroundColor: theme.colors.primary,
          },
        ]}
        mode="elevated"
        color={isDark ? 'black' : 'white'}
        onPress={onNavigateToSearch}
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
