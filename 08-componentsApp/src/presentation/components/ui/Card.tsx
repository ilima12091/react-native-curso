import React, { PropsWithChildren, useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';

interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = (props: CardProps) => {
  const { style, children } = props;

  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
  },
});
