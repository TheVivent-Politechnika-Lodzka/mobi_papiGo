import React from 'react';
import { Animal } from '../types';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

interface Props {
  animal: Animal;
}

const dogImg = require('../../assets/dog.png');
const catImg = require('../../assets/cat.png');

export default function AnimalCard(props: Props) {
  const { name, type, stars, item } = props.animal;
  const hasItem = item !== null;
  const image = type === 'cat' ? catImg : dogImg;

  return (
    <View style={styles.container}>
      <Avatar rounded size={64} source={image}>
        {hasItem && <Avatar.Accessory size={32} />}
      </Avatar>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
