import React from 'react';
import { Text as RNText } from 'react-native';
import { textStyles } from './styles';

export type TextProps = React.ComponentProps<typeof RNText>;

export const Text = (props: TextProps) => {
  const { children, className = '' } = props;

  return (
    <RNText {...props} className={`${textStyles()} ${className}`}>
      {children}
    </RNText>
  );
};
