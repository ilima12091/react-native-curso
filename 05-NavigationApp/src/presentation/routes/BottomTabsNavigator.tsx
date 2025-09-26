import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';

const {Navigator, Screen} = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: globalColors.primary,
        headerLeft: HamburgerMenu,
      }}>
      <Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <Ionicons name="accessibility-outline" size={24} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <Ionicons name="airplane-outline" size={24} color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <Ionicons name="bar-chart-outline" size={24} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Navigator>
  );
};
