import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Products" component={ProductsScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
