import React from 'react';
import { Pressable } from 'react-native';
import { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './styles';
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
      <Text className="color-text-primary-contrast font-bold">{label}</Text>
    </Pressable>
  );
};
