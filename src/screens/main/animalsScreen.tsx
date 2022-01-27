import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  ScrollView,
} from 'react-native';
import useFirestore, { useAnimals } from '../../auth/useFirestore';
import AnimalCard from '../../components/animal-card';
import { Animal } from '../../types';

import NavBar from '../../components/navBar';

export default function AnimalsScreen({ navigation }: any) {
  const [animals, animalsUpdater] = useAnimals();

  const handlePress = (animal: Animal) => {
    navigation.navigate('Animal', { animal });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        <ScrollView>
          {/* <Button
          title="test"
          onPress={() => animalsUpdater.addAnimal(new Animal())}
        /> */}
          {animals.map((animal: any) => (
            <AnimalCard key={animal.id} animal={animal} onPress={handlePress} />
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
});
