import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: top,
      }}>
      <Text>ProfileScreen</Text>
      <PrimaryButton
        label="Abrir menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};
