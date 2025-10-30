import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { PokemonScreen } from '../screens/pokemon/PokemonScreen';
import { SearchScreen } from '../screens/search/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PokemonScreen" component={PokemonScreen} />
      <Screen name="SearchScreen" component={SearchScreen} />
    </Navigator>
  );
};
