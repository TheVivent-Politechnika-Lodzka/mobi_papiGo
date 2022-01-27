import React from 'react';
import { Alert, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Callout, Marker } from 'react-native-maps';
import { Animal } from '../types';
import { ANIMAL_NAMES } from '../utils/names';
import {
  getRandomIntInclusive,
  getRandomItem,
  getRandomPointInRange,
} from '../utils/randomizer';

const dogImg = require('../../assets/dog.png');
const catImg = require('../../assets/cat.png');
const collarImg = require('../../assets/collar.png');

interface MarkerGenerator {
  longitude: number;
  latitude: number;
  range: number;
}

export function generateRandomAnimalMarker(props: MarkerGenerator) {
  const animal = new Animal();
  animal.name = getRandomItem(ANIMAL_NAMES);
  animal.stars = getRandomIntInclusive(1, 5);
  animal.type = getRandomItem(['dog', 'cat']);
  animal.stats.agility = getRandomIntInclusive(1, 5);
  animal.stats.strength = getRandomIntInclusive(1, 5);
  animal.stats.range = getRandomIntInclusive(1, 5);
  animal.maxEnergy = getRandomIntInclusive(10, 20);
  animal.currentEnergy = animal.maxEnergy;

  const { x, y } = getRandomPointInRange(
    props.longitude,
    props.latitude,
    props.range
  );

  //   Alert.alert(`from ${props.longitude} ${props.latitude} to ${x} ${y}`);

  return { animal, longitude: x, latitude: y };
}

export interface AnimalMarkerProps {
  animal: Animal;
  latitude: number;
  longitude: number;
}

export function AnimalMarker(props: AnimalMarkerProps) {
  const img = props.animal.type === 'cat' ? catImg : dogImg;

  return (
    <Marker
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    >
      <View>
        <Avatar size={48} source={img} />
      </View>
      <Callout tooltip>
        <Text>{props.animal.name}</Text>
      </Callout>
    </Marker>
  );
}

interface ItemMarkerProps {
  item: Animal;
  latitude: number;
  longitude: number;
}
export function ItemMarker(props: ItemMarkerProps) {
  return (
    <Marker
      image={collarImg}
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    >
      <Callout tooltip>
        <Text>{props.item.name}</Text>
      </Callout>
    </Marker>
  );
}
