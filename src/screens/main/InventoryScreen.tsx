import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useItems } from '../../auth/useFirestore';
import ItemCard from '../../components/item-card';

import NavBar from '../../components/navBar';

export default function InventoryScreen({ navigation }: any) {
  const [items, itemUpdater] = useItems();

  return (
    <View style={styles.container}>
      {items.map((item: any) => (
        <ItemCard key={item.id} item={item} />
      ))}
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
    ...StyleSheet.absoluteFillObject,
  },
});
