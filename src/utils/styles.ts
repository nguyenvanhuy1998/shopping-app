import {ColorValue, TextStyle} from 'react-native';
import {colors, fontFamilies, fontSizes} from '../constants';

export const getTextStyle = (
  typeText: 'Heading' | 'SubHeading' | 'Body' | undefined,
  size: 'small' | 'medium' | 'large' | undefined,
  color: ColorValue | undefined,
  fontFamily: string | undefined,
  textAlign: 'left' | 'right' | 'justify' | 'auto',
  lineHeight: number | undefined,
): TextStyle => {
  const baseStyle: TextStyle = {
    color: color ?? colors.dark,
    textAlign,
    lineHeight,
  };

  switch (typeText) {
    case 'Heading':
      return {
        ...baseStyle,
        fontSize:
          size === 'small'
            ? fontSizes.size20
            : size === 'medium'
            ? fontSizes.size24
            : fontSizes.size32,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
      };
    case 'SubHeading':
      return {
        ...baseStyle,
        fontSize:
          size === 'small'
            ? fontSizes.size16
            : size === 'medium'
            ? fontSizes.size18
            : fontSizes.size20,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
      };
    case 'Body':
      return {
        ...baseStyle,
        fontSize:
          size === 'small'
            ? fontSizes.size12
            : size === 'medium'
            ? fontSizes.size14
            : fontSizes.size16,
        color: color ?? colors.desc,
        fontFamily: fontFamily ?? fontFamilies.poppinsRegular,
      };
    default:
      return {
        ...baseStyle,
        fontSize: fontSizes.size10,
        color: color ?? colors.desc,
        fontFamily: fontFamily ?? fontFamilies.robotoRegular,
      };
  }
};
