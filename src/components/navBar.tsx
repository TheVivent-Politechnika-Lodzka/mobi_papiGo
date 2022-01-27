import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  View,
  Alert,
} from 'react-native';
import { Button, Avatar, Image } from 'react-native-elements';

const lapaImg = require('../../assets/lapa.png');
const logoImg = require('../../assets/logo.png');
const plecakImg = require('../../assets/plecak.png');

interface NavProps {
  navigation: any;
  user?: string;
}

export default function NavBar(props: NavProps) {
  const { user, navigation } = props;
  const moveToScreen = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Button
        title={<Image source={lapaImg} style={{ width: 60, height: 60 }} />}
        containerStyle={styles.navButton}
        buttonStyle={{ backgroundColor: '#C8E3D4' }}
        onPress={() => moveToScreen('Animals')}
      />
      <Button
        title={<Image source={logoImg} style={{ width: 60, height: 60 }} />}
        containerStyle={styles.navButton}
        buttonStyle={{ backgroundColor: '#C8E3D4' }}
        onPress={() => moveToScreen(user ? 'User' : 'Map')}
      />
      <Button
        title={<Image source={plecakImg} style={{ width: 60, height: 60 }} />}
        containerStyle={styles.navButton}
        buttonStyle={{ backgroundColor: '#C8E3D4' }}
        onPress={() => moveToScreen('Inventory')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '12%',
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#87AAAA',
  },
  navButton: {
    width: '20%',
    height: '100%',
  },
});
