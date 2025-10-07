import React from 'react';
import { Text, View } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SubTitleProps {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = (props: SubTitleProps) => {
  const { text, safe = false, backgroundColor = colors.cardBackground } = props;

  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor,
      }}
    >
      {text}
    </Text>
  );
};
