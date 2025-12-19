import React from 'react';
import { Pressable, View } from 'react-native';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { Text } from '../../components/text/Text';
import { Button, Input } from '../../components/forms';

export const LoginScreen = () => {
  return (
    <ScreenContainer className="justify-center gap-4" hasHorizontalPadding>
      <View>
        <Text className="text-5xl leading-tight font-bold">Ingresar</Text>
        <Text>Por favor, ingrese para continuar</Text>
      </View>
      <View className="gap-4">
        <Input placeholder="Correo electrónico" autoCapitalize="none" />
        <Input placeholder="Contraseña" autoCapitalize="none" secureTextEntry />
        <Button label="Ingresar" />
        <View className="flex-row justify-center gap-2 mt-2">
          <Text className="text-center justify-center">
            ¿No tienes una cuenta?
          </Text>
          <Pressable>
            <Text className="color-primary font-bold">Regístrate</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};
