import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../../components/text/Text';
import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';

export const LoadingScreen = () => {
  return (
    <ScreenContainer className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" className="color-primary" />
      <Text className="mt-4">Cargando...</Text>
    </ScreenContainer>
  );
};
