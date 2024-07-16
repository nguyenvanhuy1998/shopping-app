import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {CartScreen} from '../screens';

type CartStackParamList = {
  CartScreen: undefined;
};

const Stack = createNativeStackNavigator<CartStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const CartNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
