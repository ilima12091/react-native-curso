import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { StackScreenProps } from '@react-navigation/stack';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { RootStackParams } from '../../navigation/StackNavigator';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { FullScreenLoader } from '../../components/fullScreenLoader/FullScreenLoader';
import { Text } from '../../components/text/Text';
import { FlatList, ScrollView, View } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { Button, Input } from '../../components/forms';
import { Gender, Size } from '../../../domain/entities/product';

interface ProductScreenProps extends StackScreenProps<
  RootStackParams,
  'ProductScreen'
> {}

export const ProductScreen = (props: ProductScreenProps) => {
  const { route } = props;
  const { productId } = route.params;
  const productIdRef = useRef(productId);

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  return (
    <ScreenContainer
      title={product?.title || 'Product'}
      subtitle={`Cost: ${product?.price}`}
    >
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <ScrollView>
          <FlatList
            data={product?.images}
            keyExtractor={item => item}
            contentContainerClassName="gap-4"
            renderItem={({ item }) => (
              <FadeInImage
                uri={item}
                className="w-[300px] h-[300px]"
                style={{ resizeMode: 'cover' }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
          <View className="gap-4 p-4">
            <Input placeholder="Title" value={product?.title} />
            <Input placeholder="Slug" value={product?.slug} />
            <Input
              placeholder="Description"
              value={product?.description}
              multiline
            />
            <View className="gap-4 flex-row">
              <Input
                placeholder="Cost"
                className="flex-1"
                value={product?.price.toString()}
              />
              <Input
                placeholder="Stock"
                className="flex-1"
                value={product?.stock.toString()}
              />
            </View>
            <View className="flex-row">
              {Object.values(Size).map(size => (
                <Button
                  key={size}
                  label={size}
                  className={`rounded-none border-none flex-1 ${product?.sizes?.includes(size) ? 'bg-primary' : 'bg-gray-400'}`}
                />
              ))}
            </View>
            <View className="flex-row">
              {Object.values(Gender).map(gender => (
                <Button
                  key={gender}
                  label={gender}
                  className={`rounded-none border-none flex-1 ${product?.gender === gender ? 'bg-primary' : 'bg-gray-400'}`}
                />
              ))}
            </View>
            <Button label="Save" />
          </View>
        </ScrollView>
      )}
    </ScreenContainer>
  );
};
