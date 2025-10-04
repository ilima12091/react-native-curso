import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const increaseBy = useCounterStore(state => state.increaseBy);
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    navigation.setOptions({
      title: `Count: ${count}`,
    });
  }, [count, navigation]);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Pressable style={styles.primaryButton} onPress={() => increaseBy(1)}>
        <Text>+1</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => increaseBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
