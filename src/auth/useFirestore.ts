import { useEffect, useState } from 'react';
// import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import useCurrentUser from './useCurrentUser';
import { Animal, DbData, Item } from '../types';

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
    } else {
      setDocRef(null);
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

  return [userData, updateUserData];
}

export function useUserData() {
  const [userData] = useFirestore();
  const data = {
    id: userData?.id,
    registrationDate: userData?.registrationDate,
  };
  return data;
}

interface ItemsUpdater {
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  updateItem: (item: Item) => void;
}
type UseItemsResult = [Item[], ItemsUpdater];

export function useItems(): UseItemsResult {
  const [userData, setUserData] = useFirestore();
  const items = userData?.items || [];

  const addItem = (item: Item) => {
    setUserData({ items: [...items, item] });
  };
  const removeItem = (item: Item) => {
    setUserData({ items: items.filter((i) => i.id !== item.id) });
  };
  const updateItem = (item: Item) => {
    setUserData({
      items: items.map((i) => (i.id === item.id ? item : i)),
    });
  };

  return [items, { addItem, removeItem, updateItem }];
}

interface AnimalsUpdater {
  addAnimal: (item: Animal) => void;
  removeAnimal: (item: Animal) => void;
  updateAnimal: (item: Animal) => void;
}
type UseAnimalsResult = [Animal[], AnimalsUpdater];

export function useAnimals(): UseAnimalsResult {
  const [userData, setUserData] = useFirestore();
  const animals = userData?.animals || [];

  const addAnimal = (animal: Animal) => {
    setUserData({ animals: [...animals, animal] });
  };
  const removeAnimal = (animal: Animal) => {
    setUserData({ animals: animals.filter((i) => i.id !== animal.id) });
  };
  const updateAnimal = (animal: Animal) => {
    setUserData({
      animals: animals.map((i) => (i.id === animal.id ? animal : i)),
    });
  };

  return [animals, { addAnimal, removeAnimal, updateAnimal }];
}
