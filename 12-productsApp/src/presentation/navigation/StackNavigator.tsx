import React from 'react';
import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';

import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { CustomHeaderTitle } from '../components/navigation/CustomHeaderTitle';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  LoadingScreen: undefined;
  HomeScreen: undefined;
  ProductScreen: { productId: string };
};

const { Navigator, Screen, Group } = createStackNavigator<RootStackParams>();

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group
        screenOptions={{
          cardStyleInterpolator: fadeAnimation,
        }}
      >
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="RegisterScreen" component={RegisterScreen} />
        <Screen
          name="LoadingScreen"
          options={{
            headerShown: false,
          }}
          component={LoadingScreen}
        />
        <Screen name="HomeScreen" component={HomeScreen} />
      </Group>
      <Screen name="ProductScreen" component={ProductScreen} />
    </Navigator>
  );
};
