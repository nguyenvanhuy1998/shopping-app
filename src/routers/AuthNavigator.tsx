import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, TemplateScreen, WelcomeScreen} from '../screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  TemplateScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="TemplateScreen" component={TemplateScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
