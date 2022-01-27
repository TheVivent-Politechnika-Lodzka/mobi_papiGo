import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  buttonStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<ViewStyle>;
  value: string;
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  const { buttonStyles, textStyles, value, onPress } = props;

  return (
    <Pressable style={[styles.buttonContainer, buttonStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>{value}</Text>
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
