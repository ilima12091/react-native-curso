import {
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';

type PrimaryButtonProps = {
  label?: string;
  onPress?: () => void;
  onLongPress?: () => void;
} & PressableProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  const {label, onPress, onLongPress, ...rest} = props;

  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => onPress?.()}
      onLongPress={() => onLongPress?.()}
      {...rest}>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#4746AB',
  },
});
