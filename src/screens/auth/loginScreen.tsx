import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Alert } from 'react-native';
import TextInput from '../../components/text-input';
// import Button from '../../components/button';
import { loginWithEmail, authenticateWithGoogle } from '../../auth/methods';
import { Input, Button, Avatar } from 'react-native-elements';

const logoImage = require('./../../../assets/logo.png');

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async () => {
    try {
      await loginWithEmail(email, password);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        {/* <TextInput
          keyboardType="email-address"
          placeholder="e-mail"
          autoComplete="email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        /> */}
        <Avatar size={150} source={logoImage} title="Logo" />
        <Input
          placeholder="adres@pocztowy.pl"
          label="E-mail"
          containerStyle={{
            backgroundColor: '#C8E3D4',
            borderRadius: 20,
            marginBottom: '10%',
            marginTop: '15%',
          }}
          labelStyle={{
            marginTop: 10,
            color: '#000',
          }}
          leftIcon={{
            type: 'entypo',
            name: 'mail',
          }}
          keyboardType="email-address"
          autoComplete="email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />

        {/* <TextInput
          placeholder="hasło"
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        /> */}
        <Input
          placeholder="Hasło"
          label="Hasło"
          containerStyle={{
            backgroundColor: '#C8E3D4',
            borderRadius: 20,
            marginBottom: '20%',
          }}
          labelStyle={{
            marginTop: 10,
            color: '#000',
          }}
          leftIcon={{ type: 'entypo', name: 'key' }}
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
        {/* </View>
      <View style={styles.input_container}> */}
        {/* <Button value="Zaloguj" onPress={login} />
        <Button value="Zaloguj z Google" onPress={authenticateWithGoogle} /> */}

        <Button
          title="Zaloguj"
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
          onPress={login}
        />
        <Button
          title="Zaloguj z Google"
          buttonStyle={{
            backgroundColor: '#C8E3D4',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 30,
            marginBottom: '10%',
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
          onPress={authenticateWithGoogle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  input_container: {
    flex: 1,
    width: '80%',
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
