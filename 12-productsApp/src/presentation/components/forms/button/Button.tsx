import React from 'react';
import { Pressable, Text } from 'react-native';
import { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './styles';

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
      <Text className="text-white font-bold">{label}</Text>
    </Pressable>
  );
};
