import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useItems } from '../../auth/useFirestore';
import ItemCard from '../../components/item-card';

import NavBar from '../../components/navBar';

export default function InventoryScreen({ navigation }: any) {
  const [items, itemUpdater] = useItems();

  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        <ScrollView>
          {items.map((item: any) => (
            <ItemCard key={item.id} item={item} />
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
