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
  showHeader?: boolean;
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
    showHeader = true,
  } = props;

  const { top, bottom } = useSafeAreaInsets();

  const customClasses = `${
    hasVerticalPadding ? 'py-4' : ''
  } ${hasHorizontalPadding ? 'px-4' : ''}`;

  return (
    <View
      style={{ paddingTop: top, paddingBottom: bottom }}
      className={`flex-1 bg-screen ${className} `}
    >
      {showHeader && <TopNavigationBar title={title} subtitle={subtitle} />}
      <View className={`flex-1 w-full ${customClasses}`}>{children}</View>
    </View>
  );
};
