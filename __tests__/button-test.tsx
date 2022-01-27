import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Button from '../src/components/button';

it('Button render test', () => {
  const button = renderer
    .create(<Button value="test" onPress={() => {}} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
