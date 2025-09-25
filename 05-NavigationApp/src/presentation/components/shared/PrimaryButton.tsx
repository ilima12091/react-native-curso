import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';

interface PrimaryButtonProps {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const {onPress, label} = props;

  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
