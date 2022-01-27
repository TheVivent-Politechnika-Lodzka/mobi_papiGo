import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFirestore from '../../auth/useFirestore';

export default function InventoryScreen() {
  const [data] = useFirestore();
  const items = data.items;

  return (
    <View style={styles.container}>
      {items.map((item: any) => (
        <Text key={item.id}>{item.title}test</Text>
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
