module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  // automock: true,
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx,js,jsx}',
    'src/screens/**/*.{ts,tsx,js,jsx}',
    '!src/components/**/*.d.ts',
  ],
  transformIgnorePatterns: [],
};

// module.exports = async () => {
//   jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// };
