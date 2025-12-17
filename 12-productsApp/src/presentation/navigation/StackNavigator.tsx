import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  LoadingScreen: undefined;
  HomeScreen: undefined;
  ProductScreen: { productId: string };
};

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="RegisterScreen" component={RegisterScreen} />
      <Screen name="LoadingScreen" component={LoadingScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="ProductScreen" component={ProductScreen} />
    </Navigator>
  );
};
