import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';

import { useAnimation } from '../../hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = (props: FadeInImageProps) => {
  const { uri, style } = props;

  const isDisposed = useRef(false);

  const { animatedOpacity, fadeIn } = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      isDisposed.current = true;
    };
  }, []);

  const onLoadEnd = () => {
    if (isDisposed.current) return;
    setIsLoading(false);
    fadeIn({});
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && (
        <ActivityIndicator size="large" style={{ position: 'absolute' }} />
      )}
      <Animated.Image
        source={{ uri }}
        style={[
          style,
          {
            opacity: animatedOpacity,
          },
        ]}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};
