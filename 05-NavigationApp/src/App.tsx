import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './presentation/routes/StackNavigator';
import {DrawerNavigator} from './presentation/routes/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};
