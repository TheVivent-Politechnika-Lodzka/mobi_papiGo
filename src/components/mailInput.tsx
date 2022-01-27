import React from 'react';
import { Input } from 'react-native-elements';

interface InputProps {
  placeholder: string;
  label: string;
  defaultValue?: string;
  onPress: () => void;
}

export default function MailInput(props: InputProps) {
  const { placeholder, label, defaultValue, onPress } = props;

  return (
    <Input
      placeholder={placeholder}
      label={label}
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
      onChangeText={onPress}
    />
  );
}
