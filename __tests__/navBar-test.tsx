import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import NavBar from '../src/components/navBar';


it('Bar test', () => {
  const bar = renderer.create(<NavBar navigation={4} user='mobilki'/>).toJSON();
  expect(bar).toMatchSnapshot();
});