import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Input } from '../../components/forms/input/Input';
import { Button } from '../../components/forms/button/Button';

export const LoginScreen = () => {
  return (
    <View className="flex-1 justify-center p-8 gap-4">
      <View>
        <Text className="text-5xl leading-tight font-bold">Ingresar</Text>
        <Text>Por favor, ingrese para continuar</Text>
      </View>
      <View className="gap-4">
        <Input placeholder="Correo electrónico" autoCapitalize="none" />
        <Input placeholder="Contraseña" autoCapitalize="none" secureTextEntry />
        <Button label="Ingresar" />
        <View className="flex-row justify-center gap-2 mt-4">
          <Text className="text-center justify-center">
            ¿No tienes una cuenta?
          </Text>
          <Pressable>
            <Text className="text-blue-500 font-bold">Regístrate</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
