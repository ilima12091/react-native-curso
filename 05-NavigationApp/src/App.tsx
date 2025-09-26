import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './presentation/routes/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
