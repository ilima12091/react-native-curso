import { useColorScheme } from 'react-native';
import { colors } from '../../config/theme/colors';

export const useGetColor = (colorName: string): string => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = colors[colorScheme as keyof typeof colors];
  const rgbValue = currentColors[colorName as keyof typeof currentColors];

  if (!rgbValue) {
    return '#000000';
  }

  const [r, g, b] = rgbValue.split(', ').map(Number);

  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
