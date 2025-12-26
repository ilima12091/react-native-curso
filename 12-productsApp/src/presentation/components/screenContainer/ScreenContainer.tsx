import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  TopNavigationBar,
  TopNavigationBarProps,
} from '../navigation/TopNavigationBar';

export type ScreenContainerProps = {
  className?: string;
  hasVerticalPadding?: boolean;
  hasHorizontalPadding?: boolean;
} & PropsWithChildren &
  TopNavigationBarProps;

export const ScreenContainer = (props: ScreenContainerProps) => {
  const {
    children,
    className,
    title,
    subtitle,
    hasVerticalPadding = false,
    hasHorizontalPadding = false,
  } = props;

  const { top, bottom } = useSafeAreaInsets();

  const customClasses = `${
    hasVerticalPadding ? 'py-8' : ''
  } ${hasHorizontalPadding ? 'px-8' : ''}`;

  return (
    <View
      style={{ paddingTop: top, paddingBottom: bottom }}
      className={`flex-1 bg-screen ${customClasses} ${className} `}
    >
      <TopNavigationBar title={title} subtitle={subtitle} />
      {children}
    </View>
  );
};
