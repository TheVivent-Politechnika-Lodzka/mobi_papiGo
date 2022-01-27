import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AllStack from './src/stacks';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '41540613622-pjahq4nk4rceu30j9mf67ufd2rusl76m.apps.googleusercontent.com',
});

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AllStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
