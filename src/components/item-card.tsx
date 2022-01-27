import React from 'react';
import { Animal, Item } from '../types';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

interface Props {
  item: Item;
}

const itemImg = require('../../assets/collar.png');

export default function ItemCard(props: Props) {
  const { name, stars, buff } = props.item;

  return (
    <View style={styles.container}>
      <Avatar rounded size={64} source={itemImg} />
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
