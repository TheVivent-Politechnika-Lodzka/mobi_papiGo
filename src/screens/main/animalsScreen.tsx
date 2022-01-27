import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import useFirestore, { useAnimals } from '../../auth/useFirestore';
import AnimalCard from '../../components/animal-card';
import { Animal } from '../../types';

export default function AnimalsScreen() {
  const [animals, animalsUpdater] = useAnimals();

  return (
    <View style={styles.container}>
      <Button
        title="test"
        onPress={() => animalsUpdater.addAnimal(new Animal())}
      />
      {animals.map((animal: any) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});
