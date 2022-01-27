import React, { useEffect, useRef } from 'react';
import MapView, { EventUserLocation, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import {
  generateRandomAnimalMarker,
  AnimalMarkerProps,
  AnimalMarker,
} from './marker';
import { Animal } from '../types';
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
  const [animalMarkers, setAnimalMarkers] = React.useState<AnimalMarkerProps[]>(
    []
  );

  const generateMarkers = () => {
    const newMarkers: AnimalMarkerProps[] = [];
    for (let i = 0; i < 2; i++) {
      const animalMarker = generateRandomAnimalMarker({
        longitude: location.longitude,
        latitude: location.latitude,
        range: 0.0005,
      });
      newMarkers.push(animalMarker);
    }
    // const testAnimal = new Animal();
    // testAnimal.name = 'test';
    // testAnimal.type = 'cat';
    // newMarkers.push({
    //   longitude: location.longitude,
    //   latitude: location.latitude,
    //   animal: testAnimal,
    // });
    // Alert.alert('Ja', JSON.stringify(location.latitude));
    // Alert.alert('Zwierze', JSON.stringify(newMarkers[0].latitude));
    setAnimalMarkers(newMarkers);
  };

  useEffect(() => {
    if (location?.altitude !== null && location?.altitude !== undefined) {
      generateMarkers();
    }
  }, [location.longitude, location.latitude]);

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
    // if (
    //   location?.altitude !== null &&
    //   location?.altitude !== undefined &&
    //   animalMarkers.length === 0
    // ) {
    //   generateMarkers();
    // }
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
    >
      {animalMarkers.map((marker: AnimalMarkerProps) => (
        <AnimalMarker key={marker.animal.id} {...marker} />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
