import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {HomeAuthScreen, WelcomeScreen} from '../screens';

export type AuthStackParamList = {
  HomeAuthScreen: undefined;
  WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeAuthScreen" component={HomeAuthScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
