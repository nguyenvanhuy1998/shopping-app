import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../models';

export const setUserToLS = async (user: User) => {
  await AsyncStorage.setItem('currentUser', JSON.stringify(user));
};
export const getUserFromLS = async () => {
  const result = await AsyncStorage.getItem('currentUser');
  return result ? JSON.parse(result) : null;
};
export const clearLS = async () => {
  await AsyncStorage.removeItem('currentUser');
};
export const isLoggedIn = async (): Promise<boolean> => {
  const user = await getUserFromLS();
  return user !== null;
};
