import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MapComponent from '../src/components/map';

it('Button render test', () => {
  const button = renderer.create(<MapComponent />).toJSON();
  expect(button).toMatchSnapshot();
});
