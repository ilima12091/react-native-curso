import { useEffect, useRef, useState } from 'react';
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
  className?: string;
  imageClassName?: string;
}

export const FadeInImage = (props: FadeInImageProps) => {
  const { uri, style, className, imageClassName } = props;
  const { animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const isDisposed = useRef(false);

  useEffect(() => {
    return () => {
      isDisposed.current = true;
    };
  }, []);

  const onLoadEnd = () => {
    if (isDisposed.current) return;
    fadeIn({});
    setIsLoading(false);
  };

  return (
    <View className={`justify-center items-center ${className}`}>
      {isLoading && (
        <View className="w-full h-52 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      )}

      {/* {isLoading && (
        <ActivityIndicator className="absolute color-primary" size={30} />
      )} */}

      <Animated.Image
        className={`w-full h-full flex-1 ${imageClassName}`}
        source={{ uri }}
        onLoadEnd={onLoadEnd}
        style={[style, { opacity: animatedOpacity, objectFit: 'cover' }]}
      />
    </View>
  );
};
