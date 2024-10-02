import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';

export const DimensionScreen = () => {
  // Al utilizar useWindowDimensions, se obtiene el ancho y alto de la pantalla del dispositivo y se actualiza si cambia.
  // Con el Dimensions.get('window') se obtiene el ancho y alto de la pantalla del dispositivo, pero no se actualiza si cambia.
  // Ej: al rotar el dispositivo.
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.purpleBox,
          width: width * 0.5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
});
