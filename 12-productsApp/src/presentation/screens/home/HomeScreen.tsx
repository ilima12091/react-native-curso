import React, { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { ScreenContainer } from '../../components/screenContainer/ScreenContainer';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { FullScreenLoader } from '../../components/fullScreenLoader/FullScreenLoader';
import { ProductsList } from '../../components/products/ProductsList';
import { FAB } from '../../components/ui/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';

export const HomeScreen = () => {
  const {
    isLoading,
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      console.log('pageParam', pageParam, typeof pageParam);
      return getProductsByPage(pageParam);
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < 20) return undefined;
      return lastPageParam + 1;
    },
  });

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const flatProducts = useMemo(() => {
    return products?.pages?.flat() ?? [];
  }, [products?.pages]);

  if (__DEV__) {
    const ids = flatProducts.map(p => p.id);
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dup.length) console.warn('DUPLICATE IDS', dup.slice(0, 20));
  }

  const onPressAddProduct = () => {
    navigation.navigate('ProductScreen', { productId: 'new' });
  };

  // if (isLoading) {
  //   return <FullScreenLoader />;
  // }

  return (
    <ScreenContainer className="flex-1" title="Teslo" subtitle="Products list">
      <ProductsList
        products={flatProducts}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
      <FAB onPress={onPressAddProduct} />
    </ScreenContainer>
  );
};
