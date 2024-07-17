import {Home2, Notification, ShoppingCart, User} from 'iconsax-react-native';
import {colors, fontFamilies} from '../constants';
import {TabParamList} from '../routers/TabNavigator';
import {Row} from '@bsdaoquang/rncomponent';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextComponent from './TextComponent';

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
export default TabBarIcon;
const styles = StyleSheet.create({
  focusedRow: {
    backgroundColor: colors.gray,
    height: 30,
    borderRadius: 100,
  },
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
});
