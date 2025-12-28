import React, { useState, useCallback } from 'react';
import { FlatList, RefreshControl, ListRenderItem, View } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import { Product } from '../../../domain/entities/product';
import { ProductCard } from './ProductCard';

interface ProductsListProps {
  products: Product[];
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}

export const ProductsList = (props: ProductsListProps) => {
  const {
    products,
    fetchNextPage,
    hasNextPage = true,
    isFetchingNextPage = false,
  } = props;
  const queryClient = useQueryClient();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPullToRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });
    setIsRefreshing(false);
  }, [queryClient]);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item: product }) => <ProductCard product={product} />,
    [],
  );

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage && fetchNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <FlatList
      data={products}
      keyExtractor={item => String(item.id)}
      numColumns={2}
      columnWrapperClassName="gap-2"
      contentContainerClassName="gap-2"
      renderItem={renderItem}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.6}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
      }
      ListFooterComponent={isFetchingNextPage ? <View className="h-8" /> : null}
    />
  );
};
