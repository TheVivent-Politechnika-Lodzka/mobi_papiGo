import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Text, Button } from 'react-native';
import { logout } from '../../auth/stacks/methods';

export default function MapScreen() {
  const signOut = () => {
    logout();
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Text>MapScreen</Text>
      <Button title="Wyloguj" onPress={signOut} />
    </View>
  );
}
