import React from 'react';
import { Product } from '../../../domain/entities/product';
import { Image, Pressable, View } from 'react-native';
import { FadeInImage } from '../ui/FadeInImage';
import { Text } from '../text/Text';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const navigaiton = useNavigation<NavigationProp<RootStackParams>>();

  const onPress = () => {
    navigaiton.navigate('ProductScreen', { productId: product.id });
  };

  return (
    <Pressable
      className="flex-1"
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <View className="flex-1 h-full shadow justify-center items-center overflow-hidden bg-gray-50">
        {product.images.length === 0 ? (
          <Image
            source={require('../../../assets/no-product-image.png')}
            className="w-full h-[200px]"
          />
        ) : (
          <FadeInImage uri={product.images[0]} className="w-full h-[200px]" />
        )}
        <Text className="text-center p-4" numberOfLines={2}>
          {product.title}
        </Text>
      </View>
    </Pressable>
  );
};
