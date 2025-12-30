import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  TopNavigationBar,
  TopNavigationBarProps,
} from '../navigation/TopNavigationBar';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

export type ScreenContainerProps = {
  className?: string;
  hasVerticalPadding?: boolean;
  hasHorizontalPadding?: boolean;
  showHeader?: boolean;
  contentClassName?: string;
  rightActionIconName?: IoniconsIconName;
  onPressRightAction?: () => void;
} & PropsWithChildren &
  TopNavigationBarProps;

export const ScreenContainer = (props: ScreenContainerProps) => {
  const {
    children,
    title,
    subtitle,
    className = '',
    hasVerticalPadding = false,
    hasHorizontalPadding = false,
    showHeader = true,
    contentClassName = '',
    rightActionIconName,
    onPressRightAction,
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
      {showHeader && (
        <TopNavigationBar
          title={title}
          subtitle={subtitle}
          rightActionIconName={rightActionIconName}
          onPressRightAction={onPressRightAction}
        />
      )}
      <View className={`flex-1 w-full ${customClasses} ${contentClassName}`}>
        {children}
      </View>
    </View>
  );
};
