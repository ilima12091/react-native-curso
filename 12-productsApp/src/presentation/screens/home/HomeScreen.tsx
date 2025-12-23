import React from 'react';
import { Text } from 'react-native';

import { Button } from '../../components/forms';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';

export const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <ScreenContainer
      hasHorizontalPadding
      className="flex-1 items-center justify-center"
    >
      <Text>HomeScreen</Text>
      <Button label="Cerrar sesión" onPress={logout} variant="danger" />
    </ScreenContainer>
  );
};
