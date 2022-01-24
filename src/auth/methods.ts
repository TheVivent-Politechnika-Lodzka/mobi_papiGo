import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function isValidEmail(email: string) {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

function isValidPassword(password: string) {
  return password.length >= 6;
}

export const registerWithEmail = async (email: string, password: string) => {
  if (!isValidEmail(email)) {
    Alert.alert('Błąd', 'Proszę wprowadzić poprawny adres email');
    return;
  }
  if (!isValidPassword(password)) {
    Alert.alert('Błąd', 'Hasło musi mieć conajmniej 6 znaków');
    return;
  }

  return auth().createUserWithEmailAndPassword(email, password);
};

export const loginWithEmail = async (email: string, password: string) => {
  if (!isValidEmail(email)) {
    Alert.alert('Błąd', 'Proszę wprowadzić poprawny adres email');
    return;
  }
  if (!isValidPassword(password)) {
    Alert.alert('Błąd', 'Hasło musi mieć conajmniej 6 znaków');
    return;
  }

  return auth().signInWithEmailAndPassword(email, password);
};

export const authenticateWithGoogle = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

export const logout = async () => {
  return auth().signOut();
};
