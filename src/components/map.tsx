import React, { useEffect, useRef } from 'react';
import MapView, { EventUserLocation, PROVIDER_GOOGLE } from 'react-native-maps';
import { Alert, StyleSheet } from 'react-native';

interface Location {
  latitude: number;
  longitude: number;
  altitude: number;
  timestamp: number;
  accuracy: number;
  speed: number;
  heading: number;
  isFromMockProvider: boolean;
}

export default function MapComponent() {
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = React.useState<Location>({} as Location);

  useEffect(() => {
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        pitch: 45,
        heading: location.heading,
        altitude: location.altitude,
        zoom: 18.5,
      },
      {
        duration: 1000,
      }
    );
  }, [location]);

  const updateLocation = (e: EventUserLocation) => {
    const newLocation: Location = e.nativeEvent.coordinate;
    setLocation(newLocation);
  };

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      onUserLocationChange={updateLocation}
      //  consts:
      showsUserLocation={true}
      userLocationPriority="high"
      userLocationUpdateInterval={500}
      userLocationFastestInterval={500}
      provider={PROVIDER_GOOGLE}
      showsCompass={false}
      showsScale={false}
      showsPointsOfInterest={false}
      showsIndoors={false}
      showsMyLocationButton={false}
      toolbarEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
