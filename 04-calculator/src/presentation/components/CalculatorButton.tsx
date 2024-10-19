import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface CalculatorButtonProps {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress?: () => void;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
  const {
    label,
    onPress,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
  } = props;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...globalStyles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
