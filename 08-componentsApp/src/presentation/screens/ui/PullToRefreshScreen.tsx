import React, { useContext, useState } from 'react';
import { Title } from '../../components/ui/Title';
import { RefreshControl, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
      }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressViewOffset={top}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          colors={[colors.primary, 'red', 'orange', 'green']}
        />
      }
    >
      <Title text="Pull to Refresh" safe />
    </ScrollView>
  );
};
