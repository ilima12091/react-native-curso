import React from 'react';
import {Pressable} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={{
        marginHorizontal: 16,
      }}>
      <Ionicons name="menu-outline" size={30} color={globalColors.primary} />
    </Pressable>
  );
};
