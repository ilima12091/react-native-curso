import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <PrimaryButton
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}>
        +1
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
