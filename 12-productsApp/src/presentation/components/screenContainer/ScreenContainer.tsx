import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export type ScreenContainerProps = {
  className?: string;
  hasVerticalPadding?: boolean;
  hasHorizontalPadding?: boolean;
} & PropsWithChildren;

export const ScreenContainer = (props: ScreenContainerProps) => {
  const {
    children,
    className,
    hasVerticalPadding = false,
    hasHorizontalPadding = false,
  } = props;

  const customClasses = `${
    hasVerticalPadding ? 'py-8' : ''
  } ${hasHorizontalPadding ? 'px-8' : ''}`;

  return (
    <View className={`flex-1 bg-screen ${customClasses} ${className} `}>
      {children}
    </View>
  );
};
