import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Alert } from 'react-native';
import TextInput from '../../components/text-input';
import Button from '../../components/button';
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
        <Button value="Zaloguj" onPress={login} />
        <Button value="Zaloguj z Google" onPress={authenticateWithGoogle} />
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
});
