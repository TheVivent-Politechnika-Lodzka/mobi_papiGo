import { StyleSheet } from 'react-native';

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { Alert } from 'react-native';
import MapComponent from '../../components/map';
import ImageButton from '../../components/image-button';

import NavBar from '../../components/navBar';

const lapaImg = require('../../../assets/lapa.png');
const logoImg = require('../../../assets/logo.png');
const plecakImg = require('../../../assets/plecak.png');

// TODO: zmienić any na coś sensownego
export default function MapScreen({ navigation }: any) {
  const [geoPermGranted, setGeoPermGranted] = useState(false);

  const moveToScreen = (screen: string) => {
    navigation.navigate(screen);
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
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setGeoPermGranted(true);
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        {geoPermGranted ? (
          <MapComponent />
        ) : (
          <View style={styles.container}>
            <Text>Musisz udostępnić lokalizację</Text>
          </View>
        )}
      </View>

      {/* <View pointerEvents="box-none" style={styles.overlay}>
        <View style={styles.buttonsContainer}>
          <ImageButton onPress={() => moveToScreen('Animals')} src={lapaImg} />
          <ImageButton onPress={() => moveToScreen('User')} src={logoImg} />
          <ImageButton
            onPress={() => moveToScreen('Inventory')}
            src={plecakImg}
          />
        </View>
      </View> */}
      <NavBar navigation={navigation} user="test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  containerCards: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '85%',
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 10,
    backgroundColor: '#F6D7A7',
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
    height: '20%',
    backgroundColor: 'rgba(135, 170, 170, 0.5)',
    flexDirection: 'row',
  },
});
