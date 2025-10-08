import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import { colors } from '../../../config/theme/theme';
import { SlideItem } from '../../components/ui/SlideItem';
import { Button } from '../../components/ui/Button';

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({ index });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        // scrollEnabled={false}
        onScroll={onScroll}
      />
      {currentSlideIndex === items.length - 1 ? (
        <Button
          text="Finish"
          onPress={() => scrollToSlide(0)}
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            width: 100,
          }}
        />
      ) : (
        <Button
          text="Next"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            width: 100,
          }}
        />
      )}
    </View>
  );
};
