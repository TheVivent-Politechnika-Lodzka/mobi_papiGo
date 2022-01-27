import React from 'react';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';

interface ButtonProps {
  valueOne: string;
  valueTwo: string;
  onPressOne: () => void;
  onPressTwo: () => void;
}

export default function TwoButton(props: ButtonProps) {
  const { valueOne, valueTwo, onPressOne, onPressTwo } = props;

  return (
    <View>
      <Button
        title={valueOne}
        buttonStyle={{
          backgroundColor: '#C8E3D4',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: '#000',
        }}
        onPress={onPressOne}
      />
      <Button
        title={
          valueTwo === 'Zaloguj z Google' ? (
            <>
              <Icon name="google" type="antdesign" color="black" />
            </>
          ) : (
            valueTwo
          )
        }
        buttonStyle={{
          backgroundColor: '#C8E3D4',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 30,
          marginBottom: '10%',
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: '#000',
        }}
        onPress={onPressTwo}
      />
    </View>
  );
}
