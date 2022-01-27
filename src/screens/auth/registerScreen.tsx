import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { authenticateWithGoogle, registerWithEmail } from '../../auth/methods';
import TextInput from '../../components/text-input';
import Button from '../../components/button';

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
        <TextInput
          keyboardType="email-address"
          placeholder="e-mail"
          autoComplete="email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>
      <View style={styles.input_container}>
        <TextInput
          placeholder="hasło"
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
      </View>
      <View style={styles.input_container}>
        <TextInput
          placeholder="powtórz hasło"
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={passwordConfirm}
          onChangeText={(newText) => setPasswordConfirm(newText)}
        />
      </View>
      <View style={styles.input_container}>
        <Button value="Zarejestruj" onPress={handleRegister} />
        <Button value="Zarejstruj z Google" onPress={handleGoogleRegister} />
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
    width: '100%',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#ddd',

    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
