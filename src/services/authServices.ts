import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {User} from '../models';
import {
  FormLoginData,
  FormSignUpData,
  getFirebaseErrorMessage,
  isFirebaseError,
} from '../utils';
import Toast from 'react-native-toast-message';

export const authServices = {
  signUpWithEmailAndPassword: async (body: FormSignUpData) => {
    try {
      // Create user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(
        body.email,
        body.password,
      );
      // Update display name
      await userCredential.user.updateProfile({
        displayName: body.username,
      });

      const {uid, email, emailVerified, photoURL, metadata} =
        userCredential.user;
      const currentUser: User = {
        uid,
        email,
        displayName: body.username,
        emailVerified,
        photoURL,
        creationTime: metadata.creationTime,
        lastSignInTime: metadata.lastSignInTime,
      };
      // Set user to fire store
      const userDocRef = firestore().collection('users').doc(uid);
      await userDocRef.set(currentUser);

      return currentUser;
    } catch (error) {
      handleAuthError(error);
    }
  },

  signInWithEmailAndPassword: async (body: FormLoginData) => {
    try {
      // Sign in with email and password
      const userCredential = await auth().signInWithEmailAndPassword(
        body.email,
        body.password,
      );
      const {uid, metadata, emailVerified, email, displayName, photoURL} =
        userCredential.user;
      // Update user to fire store
      const userDocRef = firestore().collection('users').doc(uid);
      await userDocRef.update({
        emailVerified,
        lastSignInTime: metadata.lastSignInTime,
      });

      const currentUser: User = {
        uid,
        email,
        displayName,
        emailVerified,
        photoURL,
        creationTime: metadata.creationTime,
        lastSignInTime: metadata.lastSignInTime,
      };

      return currentUser;
    } catch (error) {
      handleAuthError(error);
    }
  },
};

const handleAuthError = (error: any) => {
  const errorMessage = isFirebaseError(error)
    ? getFirebaseErrorMessage(error)
    : 'An unexpected error occurred';
  Toast.show({
    type: 'error',
    text1: errorMessage,
  });
  throw error;
};
