/**
 * @format
 */

import 'react-native';
import React from 'react';
// import { registerWithEmail } from '../src/auth/methods';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import UserScreen from '../src/screens/main/userScreen';
import MapComponent from '../src/components/map';

it('register with email negative', () => {
  renderer.create(<MapComponent />);
  // expect(registerWithEmail('', '')).toBe(null);
});
