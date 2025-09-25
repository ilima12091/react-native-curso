import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParamList} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Go to Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
