import React, { useContext } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: ButtonProps) => {
  const { text, onPress, style } = props;
  const { colors } = useContext(ThemeContext);

  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.btnPrimary,
        { opacity: pressed ? 0.8 : 1, backgroundColor: colors.primary },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[globalStyles.btnPrimaryText, { color: colors.buttonTextColor }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};
