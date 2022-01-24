import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

type User = FirebaseAuthTypes.User;

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return currentUser;
}
