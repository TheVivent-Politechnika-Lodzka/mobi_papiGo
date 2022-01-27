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
    margin: 20,
    elevation: 8,
    backgroundColor: '#C8E3D4',
    height: 62,
    width: 258,
    borderBottomRightRadius: 27.5,
    borderTopLeftRadius: 27.5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
