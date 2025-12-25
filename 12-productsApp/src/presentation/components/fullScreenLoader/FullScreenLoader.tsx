import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" className="color-primary" />
    </View>
  );
};
