import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';

type MainStackParamList = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
