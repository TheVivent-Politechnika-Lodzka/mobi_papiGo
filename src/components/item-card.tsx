import React from 'react';
import { Item } from '../types';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

interface Props {
  item: Item;
  onPress: (item: Item) => void;
}

const itemImg = require('../../assets/collar.png');

export default function ItemCard(props: Props) {
  const { name, stars, buff } = props.item;

  return (
    <Card
      containerStyle={{
        flex: 1,
        width: '80%',
        margin: '10%',
        height: 350,
        backgroundColor: '#F6EABE',
        borderRadius: 10,
      }}
    >
      <Card.Title style={{ fontSize: 20 }}>{name}</Card.Title>
      <Card.Divider />
      <Card.Image
        onPress={() => props.onPress(props.item)}
        source={itemImg}
        style={{
          resizeMode: 'contain',
          marginBottom: '3%',
        }}
      />
      <Card.Divider />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.statContainerFirst}>
          <View style={styles.backGroundStatsContainer}>
            <Icon
              name="expand-arrows-alt"
              type="font-awesome-5"
              color="black"
              size={20}
            />
            <Text style={{ marginLeft: '3%' }}>{buff.range}</Text>
          </View>
        </View>
        <View style={styles.statContainerFirst}>
          <View style={styles.backGroundStatsContainer}>
            <Icon
              name="dumbbell"
              type="font-awesome-5"
              color="black"
              size={20}
            />
            <Text style={{ marginLeft: '3%' }}>{buff.strength}</Text>
          </View>
        </View>
        <View style={styles.statContainerFirst}>
          <View style={styles.backGroundStatsContainer}>
            <Icon
              name="running"
              type="font-awesome-5"
              color="black"
              size={20}
            />
            <Text style={{ marginLeft: '3%' }}>{buff.agility}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.statContainerSecond}>
          <View style={styles.backGroundStatsContainer}>
            <Icon name="star" type="font-awesome" color="black" size={20} />
            <Text style={{ marginLeft: '3%' }}>{stars}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  backGroundStatsContainer: {
    backgroundColor: '#C8E3D4',
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8%',
  },
  statContainerFirst: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '31%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%',
    marginVertical: '2%',
    // backgroundColor: '#87AAAA',
  },
  statContainerSecond: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '25%',
    marginVertical: '2%',
    // backgroundColor: '#87AAAA',
  },
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
