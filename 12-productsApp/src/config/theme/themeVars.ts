import { vars } from 'nativewind';
import { colors } from './colors';

export const themeVars = {
  light: vars({
    ...colors.light,
  }),
  dark: vars({
    ...colors.dark,
  }),
};
