import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ThemeProvider } from './config/theme/ThemeProvider';

import './global.css';

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
