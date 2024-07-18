import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {colors, fontFamilies, sizes} from '../constants';

interface Props extends TextProps {
  text: string;
  styles?: StyleProp<TextStyle>;
  fontSize?: number;
  color?: ColorValue;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  type?: 'bigTitle25' | 'title18' | 'text14';
}

const getStyleByType = (
  type: Props['type'],
  color: ColorValue | undefined,
  fontFamily: string | undefined,
  lineHeight: number | undefined,
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify',
): TextStyle => {
  switch (type) {
    case 'bigTitle25':
      return {
        fontSize: sizes.bigTitle25,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    case 'title18':
      return {
        fontSize: sizes.title18,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
        lineHeight,
        textAlign,
      };
    case 'text14':
      return {
        fontSize: sizes.text14,
        color: color ?? colors.dark,
        fontFamily: fontFamily ?? fontFamilies.poppinsSemiBold,
        lineHeight,
        textAlign,
      };
    default:
      return {
        fontSize: sizes.desc11,
        color: color ?? colors.desc,
        fontFamily: fontFamily ?? fontFamilies.robotoRegular,
        lineHeight,
        textAlign,
      };
  }
};

const TextComponent: React.FC<Props> = ({
  text,
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
        fontSize: fontSize ?? sizes.desc11,
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
