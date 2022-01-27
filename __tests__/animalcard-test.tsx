import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AnimalCard from '../src/components/animal-card';
import { Animal } from '../src/types';

it('Card test', () => {
  const anim = new Animal();
  const card = renderer
    .create(<AnimalCard animal={anim} onPress={() => {}} />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
