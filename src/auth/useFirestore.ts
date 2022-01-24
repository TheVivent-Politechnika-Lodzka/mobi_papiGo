import { useEffect, useState } from 'react';
// import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import useCurrentUser from './useCurrentUser';
import { Alert } from 'react-native';

// type User = FirebaseAuthTypes.User;
type DocRef = FirebaseFirestoreTypes.DocumentReference;

// cała ta funkcja jest brzydka, ale działa nieźle
// można wrzucić cokolwiek, a zwróci zawsze poprawny obiekt z bazy
export default function useFirestore() {
  const user = useCurrentUser();
  const [docRef, setDocRef] = useState<DocRef | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (user) {
      setDocRef(firestore().collection('users').doc(user.uid));
    }
  }, [user]);

  useEffect(() => {
    getInitialUserData();
  }, [docRef]);

  const getInitialUserData = async () => {
    if (docRef && user) {
      try {
        const doc = await docRef.get();
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          setInitialUserData();
        }
      } catch (e) {
        setInitialUserData();
      }
      registerSnapshotListener();
    }
  };

  const setInitialUserData = async () => {
    if (docRef && user) {
      docRef.set({
        id: user.uid,
        registrationDate: new Date(),
      });
    }
  };

  const registerSnapshotListener = () => {
    if (docRef) {
      // przy dowolnej zmiany po stronie serwera
      // zaaktualizuj dane użytkownika
      docRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        }
      });
    }
  };

  //   const updateUserData = async () => {
  //     if (userData && docRef) {
  //         const serverData = (await docRef.get()).data();
  //         setUserData(serverData);
  //     }
  // };

  useEffect(() => {
    if (userData && docRef) {
      try {
        docRef.update(userData);
      } catch (e: any) {
        Alert.alert(
          'Błąd',
          'Wystąpił błąd podczas aktualizacji danych użytkownika'
        );
      }
    }
    // updateUserData();
  }, [userData]);

  return [userData, setUserData];
}
