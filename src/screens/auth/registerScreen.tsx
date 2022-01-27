import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { authenticateWithGoogle, registerWithEmail } from '../../auth/methods';
import TwoButton from '../../components/twoButton';
import MailInput from '../../components/mailInput';
import PasswordInput from '../../components/passwordInput';

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
        <MailInput
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />
        <PasswordInput
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
        <PasswordInput
          label="Powtórz hasło"
          defaultValue={passwordConfirm}
          onChangeText={(newText) => setPasswordConfirm(newText)}
        />
        <TwoButton
          valueOne="Zarejestruj"
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
