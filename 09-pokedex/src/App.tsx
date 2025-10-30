import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ThemeContextProvider } from './presentation/context/ThemeContext';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
