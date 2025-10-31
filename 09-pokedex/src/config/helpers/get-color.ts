import { getPalette } from '@somesoap/react-native-image-palette';

export const getColorFromImage = async (image: string) => {
  const fallbackColor = '#808080';

  try {
    const colors = await getPalette(image, {
      fallbackColor,
    });

    return colors.muted;
  } catch (error) {
    console.error('Error getting color from image: ', error);
    return fallbackColor;
  }
};
