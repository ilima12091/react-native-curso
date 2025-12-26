import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { Product } from '../../../domain/entities/product';
import { ProductCard } from './ProductCard';

interface ProductsListProps {
  products: Product[];
  fetchNextPage?: () => void;
}

export const ProductsList = (props: ProductsListProps) => {
  const { products, fetchNextPage } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      className="w-full p-4"
      contentContainerClassName="gap-4"
      columnWrapperClassName="gap-4"
      numColumns={2}
      renderItem={({ item: product }) => <ProductCard product={product} />}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
      }
    />
  );
};
