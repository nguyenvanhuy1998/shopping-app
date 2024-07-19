/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {colors, fontFamilies, fontSizes, spacings} from '../constants';
import {globalStyles} from '../styles';
import {getBackgroundColor, getDimensionSizeRound} from '../utils';
import TextComponent from './TextComponent';

type Props = {
  stylesContainer?: StyleProp<ViewStyle>;
  iconRound?: ReactNode;
  outline?: boolean;
  sizeRound?:
    | 'extraLarge56'
    | 'extraLarge50'
    | 'large40'
    | 'medium35'
    | 'medium30'
    | 'small20';
  size?: 'small' | 'medium' | 'large';
  onPress: () => void;
  borderRadius?: number;
  backgroundColor?: ColorValue;
  type?: 'link' | 'text' | 'round';
  isShadow?: boolean;
  text?: string;
  fontFamily?: string;
  width?: number;
  minHeight?: number;
  prefix?: ReactNode;
  suffix?: ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

const ButtonComponent = ({
  stylesContainer,
  iconRound,
  borderRadius = 100,
  backgroundColor = colors.dark,
  outline,
  sizeRound,
  isShadow,
  type,
  text,
  fontFamily = fontFamilies.poppinsSemiBold,
  width,
  size,
  prefix,
  justifyContent = 'center',
  suffix,
  onPress,
}: Props) => {
  const getMinHeight = () => {
    switch (size) {
      case 'small':
        return spacings.space_25;
      case 'medium':
        return spacings.space_32;
      default:
        return spacings.space_50;
    }
  };
  const getPaddingHorizontal = () => {
    return size === 'small' ? undefined : spacings.space_16;
  };
  if (type === 'round') {
    return (
      <TouchableOpacity
        style={[
          globalStyles.center,
          {
            width: getDimensionSizeRound(sizeRound),
            height: getDimensionSizeRound(sizeRound),
            borderRadius,
            backgroundColor: getBackgroundColor(outline, backgroundColor),
          },
          isShadow ? globalStyles.shadow : {},
          stylesContainer,
        ]}
        onPress={onPress}>
        {iconRound && iconRound}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.row,
        {
          minHeight: getMinHeight(),
          alignItems: 'center',
          paddingHorizontal: getPaddingHorizontal(),
          justifyContent,
          width,
          backgroundColor: getBackgroundColor(outline, backgroundColor),
          borderRadius,
        },
        isShadow ? globalStyles.shadow : {},
        stylesContainer,
      ]}>
      {prefix && prefix}
      <TextComponent
        styles={
          prefix
            ? {
                marginLeft: spacings.space_16,
              }
            : undefined
        }
        text={text}
        fontSize={
          size === 'small'
            ? fontSizes.size10
            : size === 'medium'
            ? fontSizes.size14
            : fontSizes.size16
        }
        color={outline ? colors.dark : colors.white}
        fontFamily={fontFamily}
      />
      {suffix && suffix}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
