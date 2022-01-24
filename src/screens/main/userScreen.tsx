import React, { useEffect } from 'react';
import useCurrentUser from '../../auth/useCurrentUser';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { logout } from '../../auth/methods';

export default function UserScreen() {
  const user = useCurrentUser();
  const [photoURL, setPhotoURL] = React.useState(
    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
  );

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user?.photoURL]);

  if (user === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoURL }} style={styles.image} />
      <Text>{user.email}</Text>
      <Text>{user.displayName}</Text>
      <Button title="Wyloguj" onPress={logout} />
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
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});
