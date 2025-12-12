import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { MapComponent } from '../../components/maps/MapComponent';
import { useLocationStore } from '../../stores/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';

export const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (!lastKnownLocation) {
      getLocation();
    }
  }, []);

  if (!lastKnownLocation) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <MapComponent initialLocation={lastKnownLocation} showsUserLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
  },
});
