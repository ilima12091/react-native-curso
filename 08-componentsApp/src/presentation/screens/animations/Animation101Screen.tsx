import React, { useContext } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text } from 'react-native';

import { useAnimation } from '../../hooks/useAnimation';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);

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
    <CustomView style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />
      <Button text="Fade In" onPress={handleFadeIn} />
      <Button text="Fade Out" onPress={handleFadeOut} />
    </CustomView>
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
    width: 150,
    height: 150,
  },
});
