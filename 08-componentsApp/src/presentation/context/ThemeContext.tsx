import { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  const value = useMemo(
    () => ({
      currentTheme,
      colors: currentTheme === 'light' ? lightColors : darkColors,
      setTheme,
    }),
    [currentTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
