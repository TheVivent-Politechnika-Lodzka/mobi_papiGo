import { jest } from '@jest/globals';
// import {View as mockView} from 'react-native';

// jest.useFakeTimers();
// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
//   const { EventEmitter } = require('events');
//   return EventEmitter;
// });
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-background-timer', () => {});

// global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-tab-view', () => {
//   return {
//     TabView: mockView,
//   };
// });

// jest.doMock('react-native-bootsplash', () => {
//   return {
//     hide: jest.fn().mockResolvedValueOnce(),
//     show: jest.fn().mockResolvedValueOnce(),
//     getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
//   };
// });

import 'react-native-gesture-handler/jestSetup';
