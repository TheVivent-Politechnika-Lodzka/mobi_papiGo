import React, { useEffect, useRef } from 'react';
import MapView, { EventUserLocation, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import {
  generateRandomAnimalMarker,
  AnimalMarkerProps,
  AnimalMarker,
} from './marker';
import { Animal } from '../types';
import { useAnimals } from '../auth/useFirestore';
import {
  getRandomFloatInclusive,
  getRandomIntInclusive,
} from '../utils/randomizer';
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
  const [animals, animalsUpdater] = useAnimals();
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = React.useState<Location>({} as Location);
  const [animalMarkers, setAnimalMarkers] = React.useState<AnimalMarkerProps[]>(
    []
  );

  useEffect(() => {
    if (location?.altitude === null || location?.altitude === undefined) {
      return;
    }
    // 10% szansy na dodanie nowego markera
    // pewnie będzie trzeba zmiejszyć
    if (getRandomFloatInclusive(1, 100) > 10) {
      return;
    }

    const animalMarker = generateRandomAnimalMarker({
      longitude: location.longitude,
      latitude: location.latitude,
      range: 0.0009,
    });
    setAnimalMarkers([...animalMarkers, animalMarker]);
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
    const newLocation: Location = e.nativeEvent.coordinate;
    setLocation(newLocation);
  };

  const handleAnimalPress = (
    longitude: number,
    latitude: number,
    animal: Animal
  ) => {
    const newAnimalMarkers = animalMarkers.filter(
      (marker) => marker.animal.id !== animal.id
    );
    setAnimalMarkers(newAnimalMarkers);
    animalsUpdater.addAnimal(animal);
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
        <AnimalMarker
          key={marker.animal.id}
          {...marker}
          onPress={handleAnimalPress}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
