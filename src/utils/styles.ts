import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  colors,
  fontFamilies,
  fontSizes,
  iconSizes,
  spacings,
} from '../constants';
import {globalStyles} from '../styles';

type ButtonType = 'link' | 'outline' | 'round' | undefined;

export const getTextStyle = (
  typeText: 'Heading' | 'SubHeading' | 'Body' | 'Small' | undefined,
  size: 'small' | 'medium' | 'large' | undefined,
  color: ColorValue | undefined,
  fontFamily: string | undefined,
  textAlign: 'left' | 'right' | 'justify' | 'auto' | 'center' | undefined,
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
    case 'Small':
      return {
        ...baseStyle,
        fontSize: fontSizes.size10,
        color: color ?? colors.white,
        fontFamily: fontFamily ?? fontFamilies.poppinsBold,
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

const getColor = (
  color: ColorValue | undefined,
  typeButton: ButtonType,
  defaultColor: ColorValue,
  outlineColor: ColorValue,
): ColorValue =>
  color ?? (typeButton === 'outline' ? outlineColor : defaultColor);

export const getBackgroundColor = (
  backgroundColor: ColorValue | undefined,
  typeButton: ButtonType,
): ColorValue =>
  getColor(backgroundColor, typeButton, colors.dark, colors.white);

export const getBorderColor = (
  borderColor: ColorValue | undefined,
  typeButton: ButtonType,
): ColorValue => getColor(borderColor, typeButton, colors.dark, colors.gray2);

export const getColorText = (
  color: ColorValue | undefined,
  typeButton: ButtonType,
): ColorValue => getColor(color, typeButton, colors.white, colors.dark);

export const getButtonStyles = (
  size: 'small' | 'medium' | 'large' | undefined,
  width: number | undefined,
  disabled: boolean | undefined,
  backgroundColor: ColorValue | undefined,
  borderColor: ColorValue | undefined,
  typeButton: 'link' | 'outline' | 'round' | undefined,
  borderRadius: number | undefined,
  borderWidth: number | undefined,
  marginTop: number | undefined,
  stylesContainer: StyleProp<ViewStyle> | undefined,
): StyleProp<ViewStyle> => [
  styles.button,
  {
    minHeight:
      size === 'small'
        ? spacings.space_24
        : size === 'medium'
        ? spacings.space_32
        : spacings.space_50,
    width,
    backgroundColor: disabled
      ? colors.gray
      : getBackgroundColor(backgroundColor, typeButton),
    borderRadius,
    borderWidth,
    borderColor: disabled
      ? colors.gray
      : getBorderColor(borderColor, typeButton),
    marginTop,
  },
  stylesContainer,
];

export const getButtonRoundStyles = (
  disabled: boolean | undefined,
  backgroundColor: ColorValue | undefined,
  borderColor: ColorValue | undefined,
  typeButton: 'link' | 'outline' | 'round' | undefined,
  borderRadius: number | undefined,
  borderWidth: number | undefined,
  marginTop: number | undefined,
  size: 'small' | 'medium' | 'large' | undefined,
  dimension: number | undefined,
  stylesContainer: StyleProp<ViewStyle>,
): StyleProp<ViewStyle> => [
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: dimension
      ? dimension
      : size === 'small'
      ? iconSizes.small
      : size === 'medium'
      ? iconSizes.medium30
      : iconSizes.large,
    height: dimension
      ? dimension
      : size === 'small'
      ? iconSizes.small
      : size === 'medium'
      ? iconSizes.medium30
      : iconSizes.large,
    backgroundColor: disabled
      ? colors.gray
      : getBackgroundColor(backgroundColor, typeButton),
    borderRadius,
    borderWidth,
    borderColor: disabled
      ? colors.gray
      : getBorderColor(borderColor, typeButton),
    marginTop,
  },
  stylesContainer,
];

const styles = StyleSheet.create({
  button: {
    ...globalStyles.row,
    ...globalStyles.center,
    gap: spacings.space_8,
  },
});
