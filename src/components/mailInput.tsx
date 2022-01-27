import React from 'react';
import { Input } from 'react-native-elements';

interface InputProps {
  defaultValue?: string;
  onChangeText: (text: string) => void;
}

export default function MailInput(props: InputProps) {
  const { defaultValue, onChangeText } = props;

  return (
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
      defaultValue={defaultValue}
      onChangeText={onChangeText}
    />
  );
}
