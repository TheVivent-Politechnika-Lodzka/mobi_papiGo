import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import PasswordInput from '../src/components/passwordInput';

it('Input test', () => {
  const input = renderer
    .create(
      <PasswordInput label="s" defaultValue="as" onChangeText={() => {}} />
    )
    .toJSON();
  expect(input).toMatchSnapshot();
});
