module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [],
};

// module.exports = async () => {
//   jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// };
