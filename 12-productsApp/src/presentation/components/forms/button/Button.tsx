import React from 'react';
import { Pressable } from 'react-native';
import { VariantProps } from 'tailwind-variants';
import { buttonStyles, buttonTextStyles } from './styles';
import { Text } from '../../text/Text';

export type ButtonProps = {
  label: string;
} & React.ComponentProps<typeof Pressable> &
  VariantProps<typeof buttonStyles>;

export const Button = (props: ButtonProps) => {
  const { label, className = '', variant = 'primary' } = props;

  return (
    <Pressable
      className={`${buttonStyles({ variant })} ${className}`}
      {...props}
    >
      <Text className={buttonTextStyles({ variant })}>{label}</Text>
    </Pressable>
  );
};
