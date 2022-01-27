import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useItems } from '../../auth/useFirestore';
import ItemCard from '../../components/item-card';

export default function InventoryScreen() {
  const [items, itemUpdater] = useItems();

  return (
    <View style={styles.container}>
      {items.map((item: any) => (
        <ItemCard key={item.id} item={item} />
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
