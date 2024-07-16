import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {NotificationsScreen} from '../screens';

type NotificationParamList = {
  NotificationsScreen: undefined;
};

const Stack = createNativeStackNavigator<NotificationParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const NotificationNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
