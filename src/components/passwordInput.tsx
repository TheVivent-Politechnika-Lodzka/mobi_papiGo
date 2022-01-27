import React from 'react';
import { Input } from 'react-native-elements';

interface InputProps {
  label?: string;
  defaultValue?: string;
  onChangeText: (text: string) => void;
}

export default function PasswordInput(props: InputProps) {
  const { label, defaultValue, onChangeText } = props;

  return (
    <Input
      placeholder="Hasło"
      label={label ? label : 'Hasło'}
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
      defaultValue={defaultValue}
      onChangeText={onChangeText}
    />
  );
}
