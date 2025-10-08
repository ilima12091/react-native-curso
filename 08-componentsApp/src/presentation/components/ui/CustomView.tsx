import React, { ReactNode, useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  isHorizontallyPadded?: boolean;
  isVerticallyPadded?: boolean;
}

export const CustomView = (props: CustomViewProps) => {
  const { style, children, isHorizontallyPadded, isVerticallyPadded } = props;

  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        isHorizontallyPadded && styles.horizontallyPadded,
        isVerticallyPadded && styles.verticallyPadded,
        { backgroundColor: colors.background },
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
