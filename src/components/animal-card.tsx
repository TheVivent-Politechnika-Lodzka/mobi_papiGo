import React from 'react';
import { Animal } from '../types';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

interface Props {
  animal: Animal;
}

const dogImg = require('../../assets/dog.png');
const catImg = require('../../assets/cat.png');

export default function AnimalCard(props: Props) {
  const { name, type, stars, item, stats, currentEnergy, maxEnergy } =
    props.animal;
  const hasItem = item !== null;
  const image = type === 'cat' ? catImg : dogImg;

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
      <Card.Title style={{ fontSize: 20 }}>
        {name}{' '}
        {item ? (
          <Icon name="inbox" type="antdesign" color="black" size={17} />
        ) : null}
      </Card.Title>
      <Card.Divider />
      <Card.Image
        source={image}
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
            <Text style={{ marginLeft: '3%' }}>{stats.range}</Text>
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
            <Text style={{ marginLeft: '3%' }}>{stats.strength}</Text>
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
            <Text style={{ marginLeft: '3%' }}>{stats.agility}</Text>
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
        <View style={styles.statContainerSecond}>
          <View style={styles.backGroundStatsContainer}>
            <Icon name="bolt" type="font-awesome" color="black" size={20} />
            <Text style={{ marginLeft: '3%' }}>
              {currentEnergy}/{maxEnergy}
            </Text>
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
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1%',
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
