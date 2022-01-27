import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Animal, Item } from '../../types';
import { useAnimals, useItems } from '../../auth/useFirestore';
import ItemCard from '../../components/item-card';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Icon, Button } from 'react-native-elements';

import NavBar from '../../components/navBar';

const catImg = require('../../../assets/cat.png');
const dogImg = require('../../../assets/dog.png');
const collarImg = require('../../../assets/collar.png');

export default function AnimalScreen({ route, navigation }: any) {
  const [animals, animalsUpdater] = useAnimals();
  const [items, itemUpdater] = useItems();
  const animal = route.params.animal as Animal;
  const animalImg = animal.type === 'cat' ? catImg : dogImg;

  const handleCollarTakeOff = () => {
    if (animal?.item === null) {
      return;
    }
    const collar = animal.item;
    animal.item = null;
    itemUpdater.addItem(collar);
    animalsUpdater.updateAnimal(animal);
  };

  const handleCollarChange = (item: Item) => {
    if (animal.item?.id === item.id) {
      return;
    }
    if (animal.item) {
      Alert.alert(
        'Zwierzak nosi już obrożę',
        'Musisz najpierw zdjąć obrożę ze zwierzaka'
      );
      return;
    }
    animal.item = item;
    animalsUpdater.updateAnimal(animal);
    itemUpdater.removeItem(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        <View style={styles.beanCard}>
          <Avatar size={48} source={animalImg} />
          <View style={styles.statContainerFirst}>
            <View style={styles.backGroundStatsContainer}>
              <Icon
                name="expand-arrows-alt"
                type="font-awesome-5"
                color="black"
                size={20}
              />
              <Text style={{ marginLeft: '3%' }}>{animal.stats.range}</Text>
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
              <Text style={{ marginLeft: '3%' }}>{animal.stats.strength}</Text>
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
              <Text style={{ marginLeft: '3%' }}>{animal.stats.agility}</Text>
            </View>
          </View>
        </View>

        <View style={styles.beanCard}>
          <Avatar size={48} source={collarImg} />
          <View style={styles.statContainerFirst}>
            <View style={styles.backGroundStatsContainer}>
              <Icon
                name="expand-arrows-alt"
                type="font-awesome-5"
                color="black"
                size={20}
              />
              <Text style={{ marginLeft: '3%' }}>
                {animal.item?.buff.range || 0}
              </Text>
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
              <Text style={{ marginLeft: '3%' }}>
                {animal.item?.buff.strength || 0}
              </Text>
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
              <Text style={{ marginLeft: '3%' }}>
                {animal.item?.buff.agility || 0}
              </Text>
            </View>
          </View>
        </View>

        {animal.item ? (
          <Button
            title="Zdejmij obrożę"
            containerStyle={{
              width: '60%',
              marginHorizontal: '20%',
              borderStyle: 'solid',
              borderWidth: 3,
              borderColor: '#F6EABE',
              borderRadius: 15,
            }}
            buttonStyle={{
              backgroundColor: '#C8E3D4',
              borderRadius: 15,
            }}
            titleStyle={{
              color: 'black',
            }}
            onPress={handleCollarTakeOff}
          />
        ) : null}

        <ScrollView>
          {items.map((item: Item) => (
            <ItemCard key={item.id} item={item} onPress={handleCollarChange} />
          ))}
        </ScrollView>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  beanCard: {
    flexDirection: 'row',
    backgroundColor: '#F6EABE',
    margin: '2%',
    borderRadius: 10,
    padding: '2%',
  },
  containerCards: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '85%',
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 10,
    backgroundColor: '#F6D7A7',
  },
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
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%',
    marginVertical: '2%',
    // backgroundColor: '#87AAAA',
  },
});
