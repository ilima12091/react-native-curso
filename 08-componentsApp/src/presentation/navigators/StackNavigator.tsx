import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchScreen } from '../screens/switches/SwitchScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';
import { PullToRefreshScreen } from '../screens/ui/PullToRefreshScreen';
import { CustomSectionListScreen } from '../screens/ui/CustomSectionListScreen';
import { ModalScreen } from '../screens/ui/ModalScreen';
import { InfiniteScrollScreen } from '../screens/ui/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/ui/SlidesScreen';
import { ChangeThemeScreen } from '../screens/theme/ChangeThemeScreen';

const { Navigator, Screen } = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Animation101Screen" component={Animation101Screen} />
      <Screen name="Animation102Screen" component={Animation102Screen} />
      <Screen name="SwitchScreen" component={SwitchScreen} />
      <Screen name="AlertScreen" component={AlertScreen} />
      <Screen name="TextInputScreen" component={TextInputScreen} />
      <Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Screen name="ModalScreen" component={ModalScreen} />
      <Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Screen name="SlidesScreen" component={SlidesScreen} />
      <Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Navigator>
  );
};
