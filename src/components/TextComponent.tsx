import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {colors, fontFamilies, fontSizes} from '../constants';

interface Props extends TextProps {
  text?: string;
  styles?: StyleProp<TextStyle>;
  fontSize?: number;
  color?: ColorValue;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  type?: 'size25' | 'size18' | 'size14';
}

const getStyleByType = (
  type: Props['type'],
  color: ColorValue | undefined,
  fontFamily: string | undefined,
  lineHeight: number | undefined,
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify',
): TextStyle => {
  switch (type) {
    case 'size25':
      return {
        fontSize: fontSizes.size25,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    case 'size18':
      return {
        fontSize: fontSizes.size18,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    case 'size14':
      return {
        fontSize: fontSizes.size14,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsSemiBold,
        lineHeight,
        textAlign,
      };
    default:
      return {
        fontSize: fontSizes.size11,
        color: color ?? colors.desc,
        fontFamily: fontFamily ?? fontFamilies.robotoRegular,
        lineHeight,
        textAlign,
      };
  }
};

const TextComponent: React.FC<Props> = ({
  text = '',
  fontSize,
  color,
  fontFamily,
  lineHeight,
  textAlign = 'left',
  type,
  styles,
  ...rest
}) => {
  const textStyle = type
    ? getStyleByType(type, color, fontFamily, lineHeight, textAlign)
    : {
        fontSize: fontSize ?? fontSizes.size11,
        color: color ?? colors.desc,
        fontFamily: fontFamily ?? fontFamilies.robotoRegular,
        lineHeight,
        textAlign,
      };

  return (
    <Text {...rest} style={[textStyle, styles]}>
      {text}
    </Text>
  );
};

export default TextComponent;
