import { StyleSheet } from 'react-native';

import React, { useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';
import { logout } from '../../auth/methods';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';
import { Alert } from 'react-native';

const lapaPng = require('../../../assets/lapa.png');
const logoImg = require('../../../assets/logo.png');
const plecakImg = require('../../../assets/plecak.png');

export default function MapScreen() {
  const signOut = () => {
    logout();
  };

  useEffect(() => {
    grantGPSPermission();
  }, []);

  const grantGPSPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Location permission denied');
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
      />
      <View style={styles.overlay}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => Alert.alert('test 1')}
            >
              <Image style={{ width: '90%', height: '90%' }} source={lapaPng} />
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => Alert.alert('test 2')}
            >
              <Image style={{ width: '90%', height: '90%' }} source={logoImg} />
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => Alert.alert('test 3')}
            >
              <Image
                style={{ width: '90%', height: '90%' }}
                source={plecakImg}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '15%',
    backgroundColor: 'rgba(135, 170, 170, 0.5)',
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: '80%',
    backgroundColor: '#C8E3D4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    //cień
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});
