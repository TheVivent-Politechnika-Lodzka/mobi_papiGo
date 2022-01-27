import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ImageButton from '../src/components/image-button';

const img = require('../assets/logo.png');

it('Button render test', () => {
  const button = renderer
    .create(<ImageButton src={img} onPress={() => {}} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
