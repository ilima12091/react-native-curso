import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
