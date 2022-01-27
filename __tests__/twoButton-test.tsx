import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import TwoButton from '../src/components/twoButton';

it('Button test', () => {
  const valueTwo = 'test';
  const card = renderer
    .create(
      <TwoButton
        valueOne="5"
        valueTwo={valueTwo}
        onPressOne={() => {}}
        onPressTwo={() => {}}
      />
    )
    .toJSON();
  expect(card).toMatchSnapshot();
});
