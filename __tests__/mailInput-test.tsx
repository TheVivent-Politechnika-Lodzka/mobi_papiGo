import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MailInput from '../src/components/mailInput';

it('Input test', () => {
  const input = renderer
    .create(<MailInput defaultValue="abc@abc.com" onChangeText={() => {}} />)
    .toJSON();
  expect(input).toMatchSnapshot();
});
