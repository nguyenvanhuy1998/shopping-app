import React from 'react';
import {ColorValue, StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {colors, fontFamilies, fontSizes} from '../constants';

type Props = {
  text?: string;
  styles?: StyleProp<TextStyle>;
  marginTop?: number;
  typeText?: 'Heading' | 'SubHeading' | 'Body';
  size?: 'small' | 'medium' | 'large';
  color?: ColorValue;
  fontFamily?: string;
  textAlign?: 'left' | 'right' | 'justify' | 'auto';
  lineHeight?: number;
};

const TextComponent = ({
  text,
  marginTop,
  styles,
  typeText,
  size,
  color,
  fontFamily,
  textAlign = 'left',
  lineHeight,
}: Props) => {
  const getTextStyle = () => {
    if (typeText === 'Heading') {
      return {
        fontSize:
          size === 'small'
            ? fontSizes.size20
            : size === 'medium'
            ? fontSizes.size24
            : fontSizes.size32,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    }
    if (typeText === 'SubHeading') {
      return {
        fontSize:
          size === 'small'
            ? fontSizes.size16
            : size === 'medium'
            ? fontSizes.size18
            : fontSizes.size20,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    }
    if (typeText === 'Body') {
      return {
        fontSize:
          size === 'small'
            ? fontSizes.size12
            : size === 'medium'
            ? fontSizes.size14
            : fontSizes.size16,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.robotoRegular,
        lineHeight,
        textAlign,
      };
    }
    return {
      fontSize: fontSizes.size10,
      color: color ?? colors.desc,
      fontFamily: fontFamily ?? fontFamilies.robotoRegular,
      lineHeight,
      textAlign,
    };
  };
  return (
    <Text
      style={[
        {
          marginTop,
        },
        getTextStyle(),
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
