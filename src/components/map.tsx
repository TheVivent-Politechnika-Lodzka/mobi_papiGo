import React, { useEffect, useRef } from 'react';
import MapView, { EventUserLocation, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Pressable, Text } from 'react-native';
import {
  generateRandomAnimalMarker,
  AnimalMarkerProps,
  AnimalMarker,
  ItemMarkerProps,
  generateRandomItemMarker,
  ItemMarker,
} from './marker';
import { Animal, Item } from '../types';
import { useAnimals, useItems } from '../auth/useFirestore';
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
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = React.useState<Location>({} as Location);

  const [animals, animalsUpdater] = useAnimals();
  const [animalMarkers, setAnimalMarkers] = React.useState<AnimalMarkerProps[]>(
    []
  );
  const [items, itemsUpdater] = useItems();
  const [itemMarkers, setItemMarkers] = React.useState<ItemMarkerProps[]>([]);

  const generateAnimalMarker = () => {
    const animalMarker = generateRandomAnimalMarker({
      longitude: location.longitude,
      latitude: location.latitude,
      range: 0.0009,
    });
    const animalMarkersCopy = [...animalMarkers, animalMarker];
    // ograniczenie na maksymalną ilość markerów
    if (animalMarkersCopy.length > 3) {
      // usuń losowy marker
      const randomIndex = getRandomIntInclusive(
        0,
        animalMarkersCopy.length - 1
      );
      animalMarkersCopy.splice(randomIndex, 1);
    }

    setAnimalMarkers(animalMarkersCopy);
  };

  const generateItemMarker = () => {
    const itemMarker = generateRandomItemMarker({
      longitude: location.longitude,
      latitude: location.latitude,
      range: 0.0009,
    });
    const itemMarkersCopy = [...itemMarkers, itemMarker];
    // ograniczenie na maksymalną ilość markerów
    if (itemMarkersCopy.length > 5) {
      // usuń losowy marker
      const randomIndex = getRandomIntInclusive(0, itemMarkersCopy.length - 1);
      itemMarkersCopy.splice(randomIndex, 1);
    }
    setItemMarkers(itemMarkersCopy);
  };

  useEffect(() => {
    if (location?.altitude === null || location?.altitude === undefined) {
      return;
    }
    // 10% szansy na dodanie nowego markera
    // pewnie będzie trzeba zmiejszyć
    if (getRandomFloatInclusive(1, 100) < 5) {
      generateAnimalMarker();
    }
    if (getRandomFloatInclusive(1, 100) < 10) {
      generateItemMarker();
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

  const handleItemPress = (longitude: number, latitude: number, item: Item) => {
    const newItemMarkers = itemMarkers.filter(
      (marker) => marker.item.id !== item.id
    );
    setItemMarkers(newItemMarkers);
    itemsUpdater.addItem(item);
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
      {itemMarkers.map((marker: ItemMarkerProps) => (
        <ItemMarker
          key={marker.item.id}
          {...marker}
          onPress={handleItemPress}
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
