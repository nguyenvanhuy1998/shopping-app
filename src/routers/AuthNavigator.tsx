import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, OnboardScreen} from '../screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  OnboardScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
