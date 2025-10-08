import React, { useContext } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { Slide } from '../../screens/ui/SlidesScreen';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface SlideItemProps {
  item: Slide;
}

export const SlideItem = (props: SlideItemProps) => {
  const { item } = props;
  const { title, desc, img } = item;

  const { colors } = useContext(ThemeContext);

  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: 40,
        justifyContent: 'center',
        width,
      }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          ...globalStyles.title,
          color: colors.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: colors.text,
          marginTop: 20,
        }}
      >
        {desc}
      </Text>
    </View>
  );
};
