import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { Animal, Item } from '../../types';
import { useAnimals, useItems } from '../../auth/useFirestore';
import ItemCard from '../../components/item-card';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Icon } from 'react-native-elements';
import useCurrentUser from '../../auth/useCurrentUser';

const catImg = require('../../../assets/cat.png');
const dogImg = require('../../../assets/dog.png');
const collarImg = require('../../../assets/collar.png');

type Params = {
  animal: Animal;
};

type Props = NativeStackScreenProps<Params, 'Animal'>;

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
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.statContainerFirst}>
          <Avatar size={48} rounded source={animalImg} />
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

      <View style={{ flexDirection: 'row' }}>
        <Avatar size={48} rounded source={collarImg} />
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

      {animal.item && (
        <Button title="Zdejmij obrożę" onPress={handleCollarTakeOff} />
      )}

      <ScrollView>
        {items.map((item: Item) => (
          <ItemCard key={item.id} item={item} onPress={handleCollarChange} />
        ))}
      </ScrollView>
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
});
