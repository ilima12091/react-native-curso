import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    borderWidth: 10,
    padding: 10,
  },
  purpleBox: {
    flex: 1,
    backgroundColor: 'purple',
    margin: 20,
  },
});
