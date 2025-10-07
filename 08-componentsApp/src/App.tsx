import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './presentation/navigators/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
