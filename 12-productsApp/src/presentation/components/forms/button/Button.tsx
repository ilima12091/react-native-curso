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
  const { label, className = '', variant = 'primary', ...rest } = props;

  return (
    <Pressable
      className={`${className} ${buttonStyles({ variant })}`}
      {...rest}
    >
      <Text className={buttonTextStyles({ variant })}>{label}</Text>
    </Pressable>
  );
};
