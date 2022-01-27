import { useEffect, useState } from 'react';
// import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import useCurrentUser from './useCurrentUser';
import { DbData } from '../types';

// type User = FirebaseAuthTypes.User;
type DocRef = FirebaseFirestoreTypes.DocumentReference;

type FirestoreResult = [DbData | null, (data: Partial<DbData>) => void];

// cała ta funkcja jest brzydka, ale działa nieźle
// można wrzucić cokolwiek, a zwróci zawsze poprawny obiekt z bazy
export default function useFirestore(): FirestoreResult {
  const user = useCurrentUser();
  const [docRef, setDocRef] = useState<DocRef | null>(null);
  const [userData, setUserData] = useState<DbData | null>(null);

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
          setUserData(doc.data() as DbData);
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
      const data: DbData = new DbData();
      data.id = user.uid;
      docRef.set(data);
    }
  };

  const registerSnapshotListener = () => {
    if (docRef) {
      // przy dowolnej zmiany po stronie serwera
      // zaaktualizuj dane użytkownika
      docRef.onSnapshot((doc) => {
        if (doc.exists) {
          setUserData(doc.data() as DbData);
        }
      });
    }
  };

  async function updateUserData(data: Partial<DbData>) {
    if (userData && docRef) {
      return docRef.update(data);
    }
  }

  // useEffect(() => {
  //   if (userData && docRef) {
  //     try {
  //       docRef.update(userData);
  //     } catch (e: any) {
  //       Alert.alert(
  //         'Błąd',
  //         'Wystąpił błąd podczas aktualizacji danych użytkownika'
  //       );
  //     }
  //   }
  //   // updateUserData();
  // }, [userData]);

  return [userData, updateUserData];
}
