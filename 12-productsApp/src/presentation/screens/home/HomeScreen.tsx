import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { FullScreenLoader } from '../../components/fullScreenLoader/FullScreenLoader';
import { ProductsList } from '../../components/products/ProductsList';

export const HomeScreen = () => {
  const {
    isLoading,
    data: products,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getProductsByPage(pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length,
  });

  return (
    <ScreenContainer
      className="flex-1 items-center justify-center"
      title="Teslo"
      subtitle="Products list"
    >
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <ProductsList
          products={products?.pages?.flat() ?? []}
          fetchNextPage={fetchNextPage}
        />
      )}
    </ScreenContainer>
  );
};
