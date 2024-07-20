import {RouteProp} from '@react-navigation/native';
import {Home, Notification, Profile, ShoppingCart} from 'iconsax-react-native';
import React, {ElementType} from 'react';
import {StyleSheet} from 'react-native';
import {colors, fontFamilies, spacings} from '../constants';
import {TabParamList} from '../routers/TabNavigator';
import {globalStyles} from '../styles';
import ButtonComponent from './ButtonComponent';
import Row from './Row';
import TextComponent from './TextComponent';

type Props = {
  focused: boolean;
  size: number;
  routeName: RouteProp<TabParamList, keyof TabParamList>;
};

const TabBarIcon = ({focused, size, routeName}: Props) => {
  const renderFocusedIcon = (IconComponent: ElementType, label: string) => (
    <Row styles={[globalStyles.center, styles.focusedContainer]}>
      <ButtonComponent
        type="round"
        sizeRound="medium30"
        iconRound={
          <IconComponent
            variant="Bold"
            size={spacings.space_20}
            color={colors.white}
          />
        }
      />
      <TextComponent
        text={label}
        color={colors.dark}
        fontFamily={fontFamilies.poppinsSemiBold}
      />
    </Row>
  );
  const renderIcon = (IconComponent: ElementType, label: string) =>
    focused ? (
      renderFocusedIcon(IconComponent, label)
    ) : (
      <IconComponent variant="Bold" size={size} color={colors.dark} />
    );
  switch (routeName.name) {
    case 'HomeTab':
      return renderIcon(Home, 'Home');
    case 'CartTab':
      return renderIcon(ShoppingCart, 'Cart');
    case 'NotificationTab':
      return renderIcon(Notification, 'Notifi');
    default:
      return renderIcon(Profile, 'Profile');
  }
};

export default TabBarIcon;
const styles = StyleSheet.create({
  focusedContainer: {
    backgroundColor: colors.gray3,
    height: spacings.space_30,
    borderRadius: 100,
    gap: spacings.space_4,
    paddingRight: spacings.space_8,
  },
});
