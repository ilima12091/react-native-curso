import React from 'react';
import {Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings screen</Text>
      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Regresar al home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
