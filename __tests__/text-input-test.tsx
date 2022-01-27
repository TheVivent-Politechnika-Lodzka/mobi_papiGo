import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TextInput from '../src/components/text-input';

it('Button render test', () => {
  const button = renderer
    .create(<TextInput value="" onChange={() => {}} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
