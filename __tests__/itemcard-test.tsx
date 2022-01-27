import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Item } from '../src/types';
import ItemCard from '../src/components/item-card';



it('Card test', () => {
  const item = new Item();
  const button = renderer.create(<ItemCard item={item}/>).toJSON();
  expect(button).toMatchSnapshot();
});