/* eslint-disable react/no-unstable-nested-components */
import {Row} from '@bsdaoquang/rncomponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home2, Notification, ShoppingCart, User} from 'iconsax-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextComponent} from '../components';
import {colors, fontFamilies} from '../constants';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';

type TabParamList = {
  HomeTab: undefined;
  CartTab: undefined;
  NotificationTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  routeName: keyof TabParamList;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  color,
  size,
  routeName,
}) => {
  color = focused ? colors.white : colors.dark;
  size = focused ? 16 : 22;
  let icon = <Home2 color={color} size={size} />;
  let name = 'Home';

  switch (routeName) {
    case 'CartTab':
      icon = (
        <ShoppingCart
          variant={focused ? 'Bold' : 'Bulk'}
          color={color}
          size={size}
        />
      );
      name = 'Cart';
      break;
    case 'NotificationTab':
      icon = (
        <Notification
          variant={focused ? 'Bold' : 'Bulk'}
          color={color}
          size={size}
        />
      );
      name = 'Notification';
      break;
    case 'ProfileTab':
      icon = (
        <User variant={focused ? 'Bold' : 'Bulk'} color={color} size={size} />
      );
      name = 'Profile';
      break;
    default:
      icon = <Home2 color={color} size={size} />;
      name = 'Home';
      break;
  }

  return (
    <Row styles={focused ? styles.focusedRow : undefined}>
      <View style={focused ? styles.iconContainer : undefined}>{icon}</View>
      {focused && <TextComponent styles={styles.textStyle} text={name} />}
    </Row>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIcon: (props: {
          focused: boolean;
          color: string;
          size: number;
        }) => <TabBarIcon {...props} routeName={route.name} />,
      })}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="CartTab" component={CartNavigator} />
      <Tab.Screen name="NotificationTab" component={NotificationNavigator} />
      <Tab.Screen name="ProfileTab" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.dark,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textStyle: {
    paddingHorizontal: 6,
    fontSize: 11,
    fontFamily: fontFamilies.poppinsMedium,
  },
  focusedRow: {
    backgroundColor: colors.gray,
    height: 30,
    borderRadius: 100,
  },
});
