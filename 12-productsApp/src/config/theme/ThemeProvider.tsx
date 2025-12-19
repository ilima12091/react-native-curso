import React, { PropsWithChildren } from 'react';
import { useColorScheme, View } from 'react-native';
import { themeVars } from './themeVars';

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const colorScheme = useColorScheme();

  const colorMode = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <View className="flex-1" style={themeVars[colorMode]}>
      {children}
    </View>
  );
};
