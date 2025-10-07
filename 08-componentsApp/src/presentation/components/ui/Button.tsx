import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const { text, onPress, style } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.btnPrimary,
        { opacity: pressed ? 0.8 : 1 },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[globalStyles.btnPrimaryText]}>{text}</Text>
    </Pressable>
  );
};
