import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

import { Location } from '../../../infrastructure/interfaces/location';
import { FAB } from '../ui/FAB';
import { useLocationStore } from '../../stores/location/useLocationStore';

interface MapComponentProps {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const MapComponent = (props: MapComponentProps) => {
  const { initialLocation, showsUserLocation = false } = props;

  const mapRef = useRef<MapView | null>(null);
  const cameraLocationRef = useRef<Location | null>(initialLocation);

  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isShowingPolyline, setIsShowingPolyline] = useState(true);

  const {
    lastKnownLocation,
    getLocation,
    watchLocation,
    clearWatchLocation,
    userLocationsHistory,
  } = useLocationStore();

  const moveCameraToLocation = (location: Location) => {
    if (mapRef.current) {
      mapRef.current.animateCamera({
        center: location,
      });
    }
  };

  const moveToCurrentLocation = async () => {
    const location = await getLocation();
    if (location) {
      cameraLocationRef.current = location;
      moveCameraToLocation(location);
    }
  };

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: cameraLocationRef.current?.latitude ?? 0,
          longitude: cameraLocationRef.current?.longitude ?? 0,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={showsUserLocation}
        onTouchStart={() => setIsFollowingUser(false)}
        showsMyLocationButton={false}
      >
        {/* <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker description"
          image={require('../../../assets/custom-marker.png')}
        /> */}
        {isShowingPolyline && (
          <Polyline
            coordinates={userLocationsHistory}
            strokeColor="blue"
            strokeWidth={5}
          />
        )}
      </MapView>
      <FAB
        iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={{ bottom: 140, right: 20 }}
      />
      <FAB
        iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{ bottom: 80, right: 20 }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
