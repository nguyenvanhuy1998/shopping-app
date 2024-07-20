/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {TabBarIcon} from '../components';
import {colors, spacings} from '../constants';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';
import {globalStyles} from '../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type TabParamList = {
  HomeTab: undefined;
  CartTab: undefined;
  NotificationTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          height:
            Platform.OS === 'ios' ? spacings.space_56 + insets.bottom : 70,
          borderTopRightRadius: 30,
          ...globalStyles.shadow,
        },
        tabBarIcon: (props: {focused: boolean; size: number}) => (
          <TabBarIcon {...props} routeName={route} />
        ),
      })}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen name="NotificationTab" component={NotificationNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
