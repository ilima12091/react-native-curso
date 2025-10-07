import React, { useState } from 'react';
import { Title } from '../../components/ui/Title';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
        />
      }
    >
      <Title text="Pull to Refresh" safe />
    </ScrollView>
  );
};
