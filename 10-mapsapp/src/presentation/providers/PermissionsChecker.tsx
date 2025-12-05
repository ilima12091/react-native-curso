
import React, { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { usePermissionStore } from '../stores/permissions/usePermissionStore';
import { RootStackParams } from '../navigation/StackNavigator';

export const PermissionsChecker = (props: PropsWithChildren) => {
  const {
    locationStatus,
    checkLocationPermission
  } = usePermissionStore();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MapScreen' }]
      });
    } else if (locationStatus !== 'undetermined') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'PermissionsScreen' }]
      });
    }
  }, [locationStatus])

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    })

    return () => {
      subscription.remove();
    };
  }, [])

  return (
    <>{props.children}</>
  );
};
