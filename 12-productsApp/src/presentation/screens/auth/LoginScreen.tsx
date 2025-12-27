import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { Text } from '../../components/text/Text';
import { Button, Input } from '../../components/forms';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface LoginScreenProps extends StackScreenProps<
  RootStackParams,
  'LoginScreen'
> {}

export const LoginScreen = (props: LoginScreenProps) => {
  const { navigation } = props;
  const { login } = useAuthStore();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onPressRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const onPressLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    setIsLoading(true);
    const successfullyAuthenticated = await login(form.email, form.password);
    setIsLoading(false);

    if (successfullyAuthenticated) {
      return;
    }

    Alert.alert('Error', 'Correo o contraseña incorrectos');
  };

  return (
    <ScreenContainer
      showHeader={false}
      contentClassName="justify-center gap-4"
      hasHorizontalPadding
    >
      <View>
        <Text className="text-5xl leading-tight font-bold">Ingresar</Text>
        <Text>Por favor, ingrese para continuar</Text>
      </View>
      <View className="gap-4">
        <Input
          placeholder="Correo electrónico"
          autoCapitalize="none"
          value={form.email}
          onChangeText={value =>
            setForm(prevValues => ({ ...prevValues, email: value }))
          }
        />
        <Input
          placeholder="Contraseña"
          autoCapitalize="none"
          secureTextEntry
          value={form.password}
          onChangeText={value =>
            setForm(prevValues => ({ ...prevValues, password: value }))
          }
        />
        <Button label="Ingresar" onPress={onPressLogin} disabled={isLoading} />
        <View className="flex-row justify-center gap-2 mt-2">
          <Text className="text-center justify-center">
            ¿No tienes una cuenta?
          </Text>
          <Button label="Regístrate" variant="link" onPress={onPressRegister} />
        </View>
      </View>
    </ScreenContainer>
  );
};
