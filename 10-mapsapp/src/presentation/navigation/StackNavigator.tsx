import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { MapScreen } from '../screens/maps/MapScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  MapScreen: undefined;
  PermissionsScreen: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Screen name="LoadingScreen" component={LoadingScreen} />
      <Screen name="MapScreen" component={MapScreen} />
      <Screen name="PermissionsScreen" component={PermissionsScreen} />
    </Navigator>
  );
};
