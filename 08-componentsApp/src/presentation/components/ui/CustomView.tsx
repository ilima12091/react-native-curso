import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { globalStyles } from '../../../config/theme/theme';

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  isHorizontallyPadded?: boolean;
  isVerticallyPadded?: boolean;
}

export const CustomView = (props: CustomViewProps) => {
  const { style, children, isHorizontallyPadded, isVerticallyPadded } = props;

  return (
    <View
      style={[
        globalStyles.mainContainer,
        isHorizontallyPadded && styles.horizontallyPadded,
        isVerticallyPadded && styles.verticallyPadded,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontallyPadded: {
    paddingHorizontal: 16,
  },
  verticallyPadded: {
    paddingVertical: 16,
  },
});
