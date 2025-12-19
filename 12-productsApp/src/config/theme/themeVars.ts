import { vars } from 'nativewind';
import { darkColors, lightColors } from './colors';

export const themeVars = {
  light: vars({
    ...lightColors,
  }),
  dark: vars({
    ...darkColors,
  }),
};
