import React from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ThemeProvider } from './config/theme/ThemeProvider';
import { AuthProvider } from './presentation/providers/AuthProvider';
import './global.css';

const queryClient = new QueryClient();

export const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
