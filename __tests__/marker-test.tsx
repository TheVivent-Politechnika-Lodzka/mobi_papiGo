import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Animal, Item } from '../src/types';
import { AnimalMarker, ItemMarker} from '../src/components/marker';
import { generateRandomAnimalMarker, generateRandomItemMarker } from '../src/components/marker';


it('Marker test', () => {
  const anim = new Animal();
  const item = new Item();
  const longitude = 1;
  const latitude = 1;
  const marker = renderer.create(<AnimalMarker animal={anim} longitude={longitude} latitude={latitude}/>).toJSON();
  expect(marker).toMatchSnapshot();
  const marker2 = renderer.create(<ItemMarker item={item} longitude={longitude} latitude={latitude}/>).toJSON();
  expect(marker2).toMatchSnapshot();

});

it('Animal marker generate test', () => {
    for (let i = 0;i < 10; i++) {
      const {
        animal,
        longitude,
        latitude
    } = generateRandomAnimalMarker({range:4, latitude:8, longitude:3})
    expect(animal).toBeInstanceOf(Animal)
    expect(longitude).toBeLessThan(8)
    expect(longitude).toBeGreaterThan(0)  
    expect(latitude).toBeLessThan(13)
    expect(latitude).toBeGreaterThan(3) 
    } 
    
});

it('Item marker generate test', () => {
    for (let i = 0;i < 10; i++) {
      const {
        item,
        longitude,
        latitude
    } = generateRandomItemMarker({range:4, latitude:8, longitude:3})
    expect(item).toBeInstanceOf(Item)
    expect(longitude).toBeLessThan(8)
    expect(longitude).toBeGreaterThan(0)  
    expect(latitude).toBeLessThan(13)
    expect(latitude).toBeGreaterThan(3) 
    } 
    
});