import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { authenticateWithGoogle, registerWithEmail } from '../../auth/methods';
// import TextInput from '../../components/text-input';
// import Button from '../../components/button';
import { Input, Button } from 'react-native-elements';
import TwoButton from '../../components/twoButton';
import MailInput from '../../components/mailInput';

export default function RegisterScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      Alert.alert('Hasła nie są takie same');
      return;
    }

    try {
      await registerWithEmail(email, password);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await authenticateWithGoogle();
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
        {/* <Input
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
        /> */}
        <MailInput
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
        {/* <TextInput
          placeholder="powtórz hasło"
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={passwordConfirm}
          onChangeText={(newText) => setPasswordConfirm(newText)}
        /> */}
        <Input
          placeholder="Hasło"
          label="Powtórz hasło"
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
          onChangeText={(newText) => setPasswordConfirm(newText)}
        />
        <TwoButton
          valueOne="Zaloguj"
          valueTwo="Zaloguj z Google"
          onPressOne={handleRegister}
          onPressTwo={handleGoogleRegister}
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
    ...StyleSheet.absoluteFillObject,
  },
  input_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
