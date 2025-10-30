import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';

import { useThemeContext } from '../../context/ThemeContext';

interface PokeballBgProps {
  style?: StyleProp<ImageStyle>;
}

export const PokeballBg = (props: PokeballBgProps) => {
  const { style } = props;

  const { isDark } = useThemeContext();

  const pokeballImage = isDark
    ? require('../../../assets/pokeball-light.png')
    : require('../../../assets/pokeball-dark.png');

  return <Image source={pokeballImage} style={[styles.pokeball, style]} />;
};

const styles = StyleSheet.create({
  pokeball: {
    width: 300,
    height: 300,
    opacity: 0.3,
  },
});
