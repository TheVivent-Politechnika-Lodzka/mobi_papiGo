import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginScreen from '../src/screens/auth/loginScreen';

it('Login test', () => {
  const log = renderer.create(<LoginScreen />).toJSON();
  expect(log).toMatchSnapshot();
});
