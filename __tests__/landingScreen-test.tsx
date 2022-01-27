import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LandingScreen from '../src/screens/auth/landingScreen';

it('Button render test', () => {
  const land = renderer.create(<LandingScreen />).toJSON();
  expect(land).toMatchSnapshot();
});
