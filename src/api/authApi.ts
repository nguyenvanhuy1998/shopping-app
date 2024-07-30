import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
const authApi = {
  signUp(body: {
    email: string;
    password: string;
  }): Promise<FirebaseAuthTypes.UserCredential> {
    const userCredentials = auth().createUserWithEmailAndPassword(
      body.email,
      body.password,
    );
    return userCredentials;
  },
};
export default authApi;
