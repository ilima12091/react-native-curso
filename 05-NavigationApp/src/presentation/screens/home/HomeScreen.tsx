import React from 'react';
import {View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParamList} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
