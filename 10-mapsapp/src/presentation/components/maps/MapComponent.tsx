import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Location } from '../../../infrastructure/interfaces/location';

interface MapComponentProps {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const MapComponent = (props: MapComponentProps) => {
  const { initialLocation, showsUserLocation = false } = props;

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={showsUserLocation}
      >
        {/* <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker description"
          image={require('../../../assets/custom-marker.png')}
        /> */}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
