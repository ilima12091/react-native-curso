import React, { memo } from 'react';
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
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onPress = () => {
    navigation.navigate('ProductScreen', { productId: product.id });
  };

  return (
    <Pressable
      onPress={onPress}
      className="bg-white flex-1"
      style={({ pressed }) => ({
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <View className="h-72 items-center bg-gray-50 dark:bg-gray-700 rounded overflow-hidden flex justify-between">
        {product.images.length === 0 ? (
          <Image
            source={require('../../../assets/no-product-image.png')}
            className="w-full h-48"
          />
        ) : (
          <Image
            source={{ uri: product.images[0] }}
            className="w-full h-48 object-cover"
          />
        )}
        <Text className="text-center p-4 flex-1" numberOfLines={2}>
          {product.title}
        </Text>
      </View>
    </Pressable>
  );
};
