import React from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { Button, Input } from '../../components/forms';
import { RootStackParams } from '../../navigation/StackNavigator';
import { Text } from '../../components/text/Text';

interface RegisterScreenProps extends StackScreenProps<
  RootStackParams,
  'RegisterScreen'
> {}

export const RegisterScreen = (props: RegisterScreenProps) => {
  const { navigation } = props;

  const onPressLogin = () => {
    navigation.pop();
  };

  return (
    <ScreenContainer
      showHeader={false}
      contentClassName="justify-center gap-4"
      hasHorizontalPadding
    >
      <View>
        <Text className="text-5xl leading-tight font-bold">Crear cuenta</Text>
        <Text>Por favor, crea una cuenta para continuar</Text>
      </View>
      <View className="gap-4">
        <Input placeholder="Nombre completo" autoCapitalize="none" />
        <Input placeholder="Correo electrónico" autoCapitalize="none" />
        <Input placeholder="Contraseña" autoCapitalize="none" secureTextEntry />
        <Button label="Crear cuenta" />
        <View className="flex-row justify-center gap-2 mt-2">
          <Text className="text-center justify-center">
            ¿Ya tienes una cuenta?
          </Text>
          <Button label="Inicia sesión" variant="link" onPress={onPressLogin} />
        </View>
      </View>
    </ScreenContainer>
  );
};
