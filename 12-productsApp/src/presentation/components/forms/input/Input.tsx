import React from 'react';
import { TextInput } from 'react-native';
import { inputStyles } from './styles';

export type InputProps = React.ComponentProps<typeof TextInput>;

export const Input = (props: InputProps) => {
  const { className = '' } = props;

  return <TextInput {...props} className={`${inputStyles()} ${className}`} />;
};
