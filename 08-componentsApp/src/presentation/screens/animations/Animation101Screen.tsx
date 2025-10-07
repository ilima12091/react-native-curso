import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  const handleFadeIn = () => {
    fadeIn({});
    startMovingTopPosition({
      initialPosition: -100,
      easing: Easing.elastic(1),
    });
  };

  const handleFadeOut = () => {
    fadeOut({
      duration: 600,
      toValue: 0,
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      <Pressable onPress={handleFadeIn}>
        <Text>Fade In</Text>
      </Pressable>
      <Pressable onPress={handleFadeOut}>
        <Text>Fade Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
