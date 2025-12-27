import React, { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';
import { VariantProps } from 'tailwind-variants';
import { buttonStyles, buttonTextStyles } from './styles';
import { Text } from '../../text/Text';

export type ButtonProps = {
  label: string;
} & React.ComponentProps<typeof Pressable> &
  VariantProps<typeof buttonStyles> &
  PropsWithChildren;

export const Button = (props: ButtonProps) => {
  const {
    label,
    className = '',
    variant = 'primary',
    children,
    ...rest
  } = props;

  return (
    <Pressable
      className={`${className} ${buttonStyles({ variant })}`}
      {...rest}
    >
      {label.length > 0 && (
        <Text className={buttonTextStyles({ variant })}>{label}</Text>
      )}
      {children}
    </Pressable>
  );
};
