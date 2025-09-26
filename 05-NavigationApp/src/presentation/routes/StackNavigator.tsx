import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="Home"
        options={{
          headerLeft: HamburgerMenu,
        }}
        component={HomeScreen}
      />
      <Screen name="Products" component={ProductsScreen} />
      <Screen name="Product" component={ProductScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
