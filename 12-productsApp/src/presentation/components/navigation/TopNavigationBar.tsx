import React from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Text } from '../text/Text';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useGetColor } from '../../hooks/useGetColor';

export interface TopNavigationBarProps {
  title?: string;
  subtitle?: string;
}

export const TopNavigationBar = (props: TopNavigationBarProps) => {
  const { title, subtitle } = props;

  const textColor = useGetColor('--text');
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onPressBack = () => {
    navigation.goBack();
  };

  const canGoBack = navigation.canGoBack();

  return (
    <View className="w-full bg-screen min-h-[60px] items-center justify-center px-8 border-b border-gray-300 py-2">
      {canGoBack && (
        <Pressable
          onPress={onPressBack}
          className="active:opacity-60 absolute left-4"
        >
          <Ionicons name="chevron-back" size={24} color={textColor} />
        </Pressable>
      )}
      <View className="items-center">
        {title && (
          <Text className="font-bold text-lg" numberOfLines={1}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text className="text-sm color-gray-400" numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};
