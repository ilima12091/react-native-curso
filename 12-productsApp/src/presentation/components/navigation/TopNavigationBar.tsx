import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../text/Text';
import Ionicons from '@react-native-vector-icons/ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

export interface TopNavigationBarProps {
  title?: string;
  subtitle?: string;
}

export const TopNavigationBar = (props: TopNavigationBarProps) => {
  const { title, subtitle } = props;

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View className="w-full bg-screen min-h-[60px] flex-row items-center px-4 border-b border-gray-300 py-2">
      {navigation.canGoBack() && (
        <Pressable onPress={onPressBack} className="active:opacity-60">
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
      )}
      <View className="ml-auto mr-auto items-center">
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
