import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import useFirestore from '../../auth/useFirestore';

export default function AnimalsScreen() {
  const [data, setData] = useFirestore();
  const [animals, setAnimals] = React.useState([]);

  useEffect(() => {
    if (data.animals) {
      setAnimals(data.animals);
    }
  }, [data?.animals]);

  return (
    <View style={styles.container}>
      {animals.map((animal: any) => (
        <Text key={animal.id}>{animal.name}test</Text>
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
