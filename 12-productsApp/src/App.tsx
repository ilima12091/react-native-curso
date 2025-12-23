import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ThemeProvider } from './config/theme/ThemeProvider';

import './global.css';
import { useColorScheme } from 'react-native';
import { AuthProvider } from './presentation/providers/AuthProvider';

export const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <ThemeProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          dark: isDarkMode,
          colors: {
            ...DefaultTheme.colors,
            background: isDarkMode ? 'rgb(25, 25, 25)' : 'rgb(255, 255, 255)',
          },
        }}
      >
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
