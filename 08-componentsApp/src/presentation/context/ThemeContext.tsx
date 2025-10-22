import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { AppState, useColorScheme, Appearance } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const colorScheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const isDark = currentTheme === 'dark';

  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     console.log('nextAppState: ', nextAppState);
  //     const currentColorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(currentColorScheme === 'dark' ? 'dark' : 'light');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  const value = useMemo(
    () => ({
      currentTheme,
      colors: currentTheme === 'light' ? lightColors : darkColors,
      setTheme,
      isDark,
    }),
    [currentTheme, isDark],
  );

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </NavigationContainer>
  );
};
