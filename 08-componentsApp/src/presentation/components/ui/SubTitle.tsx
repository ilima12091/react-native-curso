import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface SubTitleProps {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const SubTitle = (props: SubTitleProps) => {
  const { colors } = useContext(ThemeContext);

  const { text, safe = false, backgroundColor = colors.cardBackground } = props;

  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor,
        color: colors.text,
      }}
    >
      {text}
    </Text>
  );
};
