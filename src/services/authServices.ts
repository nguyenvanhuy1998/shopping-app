import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {FormSignUpData} from '../utils';

const authServices = {
  signUpWithEmailAndPassword: async (body: FormSignUpData) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        body.email,
        body.password,
      );
      const user = userCredential.user;
      // Set user data in Firestore
      await firestore().collection('users').doc(user.uid).set({
        email: user.email,
        username: body.username,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      });
      return user;
    } catch (error) {
      console.error('Error in signUpWithEmailAndPassword:', error);
      throw error;
    }
  },
};
export default authServices;
