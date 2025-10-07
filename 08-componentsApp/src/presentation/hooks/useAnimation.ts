import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

interface AnimationOptions {
  duration?: number;
  toValue?: number;
  callback?: () => void;
  initialPosition?: number;
  easing?: (value: number) => number;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const animateOpacity = ({
    duration = 300,
    toValue = 1,
    callback = () => {},
  }: AnimationOptions) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeIn = ({
    duration = 300,
    callback = () => {},
  }: AnimationOptions) => {
    animateOpacity({ duration, toValue: 1, callback });
  };

  const fadeOut = ({
    duration = 300,
    callback = () => {},
  }: AnimationOptions) => {
    animateOpacity({ duration, toValue: 0, callback });
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 600,
    easing = Easing.linear,
    callback = () => {},
  }: AnimationOptions) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing,
    }).start(() => callback());
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
