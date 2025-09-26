import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {AboutScreen} from '../screens/about/AboutScreen';
import {globalColors} from '../theme/theme';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        tabBarIndicatorStyle: {
          backgroundColor: globalColors.primary,
        },
        tabBarActiveTintColor: globalColors.primary,
      }}>
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="About" component={AboutScreen} />
    </Navigator>
  );
};
