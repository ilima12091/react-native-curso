import React, { useContext, useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation102Screen = () => {
  const { colors } = useContext(ThemeContext);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.box,
          {
            backgroundColor: colors.primary,
          },
        ]}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
