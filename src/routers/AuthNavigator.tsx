import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthSuccess,
  ForgotPassword,
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  WelcomeScreen,
} from '../screens';
import {User} from '../models';

export type AuthStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  OnboardingScreen: undefined;
  SignUpScreen: undefined;
  ForgotPassword: undefined;
  AuthSuccess: {
    currentUser?: User;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="AuthSuccess" component={AuthSuccess} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
