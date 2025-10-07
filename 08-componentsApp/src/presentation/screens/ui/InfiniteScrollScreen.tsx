import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { colors } from '../../../config/theme/theme';
import { ListItem } from '../../components/ui/ListItem';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = Array.from(
      { length: 5 },
      (_, i) => i + numbers.length,
    );
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem text={item.toString()} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  footer: {
    height: 200,
    justifyContent: 'center',
  },
});
