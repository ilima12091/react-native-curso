import React from 'react';

import { StackNavigator } from './presentation/navigators/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};
