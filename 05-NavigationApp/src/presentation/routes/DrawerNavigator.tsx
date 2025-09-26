import {useWindowDimensions, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Ionicons} from '@react-native-vector-icons/ionicons';

import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {BottomTabsNavigator} from './BottomTabsNavigator';

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
      }}
      drawerContent={CustomDrawerContent}>
      <Screen
        name="StackNavigator"
        component={BottomTabsNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={26} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={26} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          borderRadius: 50,
          margin: 20,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
