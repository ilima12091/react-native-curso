import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = (props: CardProps) => {
  const { style, children } = props;

  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 16,
  },
});
