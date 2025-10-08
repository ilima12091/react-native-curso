import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../../components/ui/Title';
import { MenuItemsList } from '../../components/ui/MenuItemsList';
import { CustomView } from '../../components/ui/CustomView';

interface MenuItemData {
  name: string;
  icon: IoniconsIconName;
  component: string;
}

const animationMenuItems: MenuItemData[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems: MenuItemData[] = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems: MenuItemData[] = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <CustomView isHorizontallyPadded>
      <ScrollView>
        <Title text="Menu Options" safe />
        <View style={styles.optionsContainer}>
          <MenuItemsList title="Animation" items={animationMenuItems} />
          <MenuItemsList title="UI" items={uiMenuItems} />
          <MenuItemsList title="Components" items={menuItems} />
        </View>
      </ScrollView>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    gap: 16,
  },
});
