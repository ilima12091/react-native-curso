import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';

interface SeparatorProps {
  style?: StyleProp<ViewStyle>;
  hasVerticalMargin?: boolean;
}

export const Separator = (props: SeparatorProps) => {
  const { style, hasVerticalMargin = false } = props;

  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: colors.text,
        },
        hasVerticalMargin && styles.margin,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    width: '90%',
    height: 1,
    opacity: 0.1,
  },
  margin: {
    marginVertical: 8,
  },
});
