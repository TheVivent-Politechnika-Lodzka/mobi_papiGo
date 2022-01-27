import React from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import { TextInputProps } from 'react-native';

export default function TextInput(props: TextInputProps) {
  return <NativeTextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#ddd',
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
