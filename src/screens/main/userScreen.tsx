import React, { useEffect } from 'react';
import useCurrentUser from '../../auth/useCurrentUser';
import { View, Text, StyleSheet } from 'react-native';
import { logout } from '../../auth/methods';

import NavBar from '../../components/navBar';
import { Avatar, Input, Button } from 'react-native-elements';
import { set } from 'react-native-reanimated';

export default function UserScreen({ navigation }: any) {
  const user = useCurrentUser();
  const [photoURL, setPhotoURL] = React.useState(
    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
  );
  const [displayName, setDisplayName] = React.useState('');

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
    if (user?.displayName) {
      setDisplayName(user.displayName);
    }
  }, [user?.photoURL, user?.displayName]);

  if (user === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Avatar size={256} rounded source={{ uri: photoURL }} />
      <Text>{user.email}</Text>
      <View style={styles.displayNameContainer}>
        <Input
          containerStyle={{ width: 300 }}
          defaultValue={displayName}
          onChangeText={(newDisplayName) => setDisplayName(newDisplayName)}
        />
        <Button
          title="Zapisz"
          onPress={() => user.updateProfile({ displayName })}
        />
      </View>
      <Button title="Wyloguj" onPress={logout} />
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AAAA',
    alignItems: 'center',
    // justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  displayNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});
