import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { globalStyles } from '../../../config/theme/styles';
import { usePermissionStore } from '../../stores/permissions/usePermissionStore';

export const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <Text>Enable location</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}
      >
        <Text style={{ color: 'white' }}>
          Grant permission
        </Text>
      </Pressable>
      <Text>
        Current state: {locationStatus}
      </Text>
    </View>
  );
};
