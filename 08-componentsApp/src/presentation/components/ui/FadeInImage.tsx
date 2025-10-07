import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  Text,
  View,
} from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = (props: FadeInImageProps) => {
  const { uri, style } = props;

  const { animatedOpacity, fadeIn } = useAnimation();

  const [isLoading, setIsLoading] = useState(true);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && (
        <ActivityIndicator
          color={colors.primary}
          size="large"
          style={{ position: 'absolute' }}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={[
          style,
          {
            opacity: animatedOpacity,
          },
        ]}
        onLoadEnd={() => {
          setIsLoading(false);
          fadeIn({});
        }}
      />
    </View>
  );
};
