import React from 'react';
import { Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TitleProps {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = (props: TitleProps) => {
  const { text, safe = false, white = false } = props;

  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        color: white ? 'white' : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
