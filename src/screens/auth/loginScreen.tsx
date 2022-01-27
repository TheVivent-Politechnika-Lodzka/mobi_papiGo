import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Alert } from 'react-native';
import { loginWithEmail, authenticateWithGoogle } from '../../auth/methods';
import { Avatar } from 'react-native-elements';
import TwoButton from '../../components/twoButton';
import MailInput from '../../components/mailInput';
import PasswordInput from '../../components/passwordInput';

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
        <Avatar size={150} source={logoImage} title="Logo" />
        <MailInput
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />
        <PasswordInput
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
        <TwoButton
          valueOne="Zaloguj"
          valueTwo="Zaloguj z Google"
          onPressOne={login}
          onPressTwo={authenticateWithGoogle}
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
