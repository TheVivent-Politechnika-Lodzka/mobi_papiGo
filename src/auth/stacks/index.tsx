import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import LoginScreen from '../../screens/auth/loginScreen';
import RegisterScreen from '../../screens/auth/registerScreen';
import LandingScreen from '../../screens/auth/landingScreen';
import MapScreen from '../../screens/main/mapScreen';
import UserScreen from '../../screens/main/userScreen';
import useFirestore from '../useFirestore';

const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export default function AllStack() {
  useFirestore();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  };

  if (loggedIn) {
    return (
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Map"
      >
        <MainStack.Screen name="Map" component={MapScreen} />
        <MainStack.Screen name="User" component={UserScreen} />
      </MainStack.Navigator>
    );
  }

  // not logged in
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landing"
    >
      <AuthStack.Screen name="Landing" component={LandingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
