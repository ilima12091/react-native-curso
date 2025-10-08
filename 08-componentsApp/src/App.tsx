import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './presentation/navigators/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};
