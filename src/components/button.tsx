import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface ButtonProps {
  value: string;
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 2,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
