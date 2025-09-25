import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {Text, useWindowDimensions, View} from 'react-native';

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
      <Screen name="StackNavigator" component={StackNavigator} />
      <Screen name="Profile" component={ProfileScreen} />
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
