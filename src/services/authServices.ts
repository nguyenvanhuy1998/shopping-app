import auth from '@react-native-firebase/auth';
const authServices = {
  signUpWithEmailAndPassword: async (email: string, password: string) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      console.error('Error in signUpWithEmailAndPassword:', error);
      throw error;
    }
  },
};
export default authServices;
