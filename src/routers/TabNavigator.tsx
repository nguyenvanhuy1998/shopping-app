import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontFamilies} from '../constants';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import NotificationNavigator from './NotificationNavigator';
import ProfileNavigator from './ProfileNavigator';
import {Notification, ShoppingCart, User} from 'iconsax-react-native';
import {StyleSheet, View} from 'react-native';
import {Row} from '@bsdaoquang/rncomponent';
import {TextComponent} from '../components';

type TabParamList = {
  HomeTab: undefined;
  CartTab: undefined;
  NotificationTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

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
        tabBarIcon: ({focused, color, size}) => {
          color = focused ? colors.white : colors.dark;
          size = focused ? 14 : 22;
          let icon = <Entypo name="home" color={color} size={size} />;
          let name = 'Home';
          switch (route.name) {
            case 'CartTab':
              icon = <ShoppingCart variant="Bold" color={color} size={size} />;
              name = 'Cart';
              break;
            case 'NotificationTab':
              icon = <Notification variant="Bold" color={color} size={size} />;
              name = 'Notification';

              break;
            case 'ProfileTab':
              icon = <User variant="Bold" color={color} size={size} />;
              name = 'Profile';
              break;

            default:
              icon = <Entypo name="home" color={color} size={size} />;
              name = 'Home';
              break;
          }
          return (
            <Row
              styles={
                focused
                  ? {
                      backgroundColor: colors.gray,
                      height: 30,
                      borderRadius: 100,
                    }
                  : undefined
              }>
              <View style={focused ? styles.iconContainer : undefined}>
                {icon}
              </View>
              {focused && (
                <TextComponent
                  styles={{
                    paddingHorizontal: 6,
                    fontSize: 11,
                    fontFamily: fontFamilies.poppinsMedium,
                  }}
                  text={name}
                />
              )}
            </Row>
          );
        },
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
    width: 30,
    height: 30,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
