import { StyleSheet } from 'react-native';

import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

import { loginWithEmail, authenticateWithGoogle } from '../../auth/methods';

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
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="e-mail"
          autoComplete="email"
          defaultValue={email}
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder="hasło"
          autoComplete="password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(newText) => setPassword(newText)}
        />
      </View>
      <View style={styles.input_container}>
        <Button title="Zaloguj" onPress={login} />
        <Button title="Zaloguj z Google" onPress={authenticateWithGoogle} />
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
