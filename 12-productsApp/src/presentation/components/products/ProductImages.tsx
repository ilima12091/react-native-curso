import React from 'react';
import { FlatList, Image } from 'react-native';

import { FadeInImage } from '../ui/FadeInImage';

interface ProductImagesProps {
  images: string[];
}

export const ProductImages = (props: ProductImagesProps) => {
  const { images } = props;

  if (images.length === 0) {
    return (
      <Image
        source={require('../../../assets/no-product-image.png')}
        className="w-[300px] h-[300px] self-center mt-4"
      />
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={item => item}
      contentContainerClassName="gap-4"
      renderItem={({ item }) => (
        <FadeInImage uri={item} className="w-[300px] h-[300px]" />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};
