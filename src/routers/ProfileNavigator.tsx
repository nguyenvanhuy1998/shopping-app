import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {ProfileScreen} from '../screens';

type ProfileStackParamList = {
  ProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
