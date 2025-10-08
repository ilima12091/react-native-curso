import React, { useContext } from 'react';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';
import { Text } from 'react-native';

export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView isHorizontallyPadded style={{ gap: 16 }}>
      <Title text={`Current theme: ${currentTheme}`} safe />
      <Button text="Light" onPress={() => setTheme('light')} />
      <Button text="Dark" onPress={() => setTheme('dark')} />
      <Text
        style={{
          color: colors.text,
        }}
      >
        {JSON.stringify(colors, null, 3)}
      </Text>
    </CustomView>
  );
};
