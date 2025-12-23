import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { useAuthStore } from '../store/auth/useAuthStore';
import { AuthStatus } from '../../infrastructure/interfaces/auth.status';

export const AuthProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const { checkStatus, status } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== AuthStatus.checking) {
      if (status === AuthStatus.authenticated) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      }
    }
  }, [status, navigation]);

  return children;
};
