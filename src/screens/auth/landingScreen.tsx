import React from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';
// import Button from '../../components/button';

import { Button } from 'react-native-elements/dist/buttons/Button';

const logoImage = require('./../../../assets/logo.png');

// TODO: zmienić to any na coś sensownego
export default function LandingScreen({ navigation }: any) {
  const login = () => {
    navigation.navigate('Login');
  };

  const register = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <ImageBackground
          source={logoImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* <Button value="Logowanie" onPress={login} /> */}
      <View style={styles.button_container}>
        <Button
          title="Logowanie"
          buttonStyle={{
            backgroundColor: '#C8E3D4',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'bold', color: '#000' }}
          onPress={login}
        />

        {/* <Pressable style={styles.button} onPress={login}>
          <Text style={styles.button_text}>Logowanie</Text>
        </Pressable> */}

        <Button
          title="Rejestracja"
          buttonStyle={{
            backgroundColor: '#C8E3D4',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            fontWeight: 'bold',
            color: '#000',
          }}
          onPress={register}
        />
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
  image_container: {
    flex: 4,
    // position: 'absolute',
    // top: 1,
    width: '80%',
    height: '60%',
    // marginHorizontal: 'auto',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  image: {
    flex: 1,
  },
  button_container: {
    marginHorizontal: 'auto',
    backgroundColor: 'rgba(255,255,255,0)',
    marginBottom: 100,
  },
  button: {
    backgroundColor: 'rgba(17,255,7,0.5)',
    // backgroundColor: '#C8E3D4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#7879F1',
    // boxSizing: 'border-box',
    // boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.15)',
    borderTopLeftRadius: 27.5,
    borderBottomRightRadius: 27.5,
    width: '100%',
    height: '100%',
    flex: 0.5,
  },
  button_text: {
    fontSize: 34,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: -0.2,
    lineHeight: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
