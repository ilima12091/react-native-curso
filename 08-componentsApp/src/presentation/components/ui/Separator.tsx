import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface SeparatorProps {
  style?: StyleProp<ViewStyle>;
  hasVerticalMargin?: boolean;
}

export const Separator = (props: SeparatorProps) => {
  const { style, hasVerticalMargin = false } = props;

  return (
    <View
      style={[styles.separator, style, hasVerticalMargin && styles.margin]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    width: '90%',
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.1,
  },
  margin: {
    marginVertical: 8,
  },
});
