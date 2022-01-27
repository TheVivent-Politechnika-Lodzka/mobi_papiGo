import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Marker } from 'react-native-maps';
import { Animal, Item } from '../types';
import { ANIMAL_NAMES, ITEM_NAMES } from '../utils/names';
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

  if (getRandomIntInclusive(0, 6 - animal.stars) === 0) {
    animal.stats.agility += getRandomIntInclusive(1, animal.stars);
  }
  if (getRandomIntInclusive(0, 6 - animal.stars) === 0) {
    animal.stats.strength += getRandomIntInclusive(1, animal.stars);
  }
  if (getRandomIntInclusive(0, 6 - animal.stars) === 0) {
    animal.stats.range += getRandomIntInclusive(1, animal.stars);
  }

  const { x, y } = getRandomPointInRange(
    props.longitude,
    props.latitude,
    props.range
  );

  return { animal, longitude: x, latitude: y };
}

export interface AnimalMarkerProps {
  animal: Animal;
  latitude: number;
  longitude: number;
  onPress?: (longitude: number, latitude: number, animal: Animal) => void;
}

export function AnimalMarker(props: AnimalMarkerProps) {
  const img = props.animal.type === 'cat' ? catImg : dogImg;

  const handlePress = () => {
    if (props.onPress) {
      props.onPress(props.longitude, props.latitude, props.animal);
    }
  };

  return (
    <Marker
      onPress={handlePress}
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    >
      <View>
        <Avatar size={48} source={img} />
      </View>
    </Marker>
  );
}

export function generateRandomItemMarker(props: MarkerGenerator) {
  const item = new Item();
  item.name = getRandomItem(ITEM_NAMES);
  item.stars = getRandomIntInclusive(1, 5);
  if (getRandomIntInclusive(0, 1) === 1) {
    item.buff.agility =
      getRandomIntInclusive(1, 5) + getRandomIntInclusive(0, item.stars);
  }
  if (getRandomIntInclusive(0, 1) === 1) {
    item.buff.strength =
      getRandomIntInclusive(1, 5) + getRandomIntInclusive(0, item.stars);
  }
  if (getRandomIntInclusive(0, 1) === 1) {
    item.buff.range =
      getRandomIntInclusive(1, 5) + getRandomIntInclusive(0, item.stars);
  }

  const { x, y } = getRandomPointInRange(
    props.longitude,
    props.latitude,
    props.range
  );

  return { item, longitude: x, latitude: y };
}
export interface ItemMarkerProps {
  item: Item;
  latitude: number;
  longitude: number;
  onPress?: (longitude: number, latitude: number, item: Item) => void;
}
export function ItemMarker(props: ItemMarkerProps) {
  const handlePress = () => {
    if (props.onPress) {
      props.onPress(props.longitude, props.latitude, props.item);
    }
  };

  return (
    <Marker
      onPress={handlePress}
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    >
      <View>
        <Avatar size={48} source={collarImg} />
      </View>
    </Marker>
  );
}
