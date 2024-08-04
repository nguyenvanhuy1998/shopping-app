import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import {colors, fontFamilies} from '../constants';
import Text from './Text';
import {getButtonRoundStyles, getButtonStyles, getColorText} from '../utils';

interface Props {
  onPress?: () => void;
  typeButton?: 'link' | 'outline' | 'round';
  disabled?: boolean;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  color?: ColorValue;
  borderRadius?: number;
  borderWidth?: number;
  marginTop?: number;
  stylesContainer?: StyleProp<ViewStyle>;
  size?: 'small' | 'medium' | 'large';
  iconRound?: React.ReactNode;
  prefix?: React.ReactNode;
  text?: string;
  loading?: boolean;
  dimension?: number;
}
const Button = ({
  onPress,
  typeButton,
  disabled,
  backgroundColor,
  borderColor,
  color,
  borderRadius = 100,
  borderWidth = 1,
  marginTop,
  stylesContainer,
  size,
  iconRound,
  prefix,
  text,
  loading,
  dimension,
}: Props) => {
  if (typeButton === 'round') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={getButtonRoundStyles(
          disabled,
          backgroundColor,
          borderColor,
          typeButton,
          borderRadius,
          borderWidth,
          marginTop,
          size,
          dimension,
          stylesContainer,
        )}
        disabled={disabled}>
        {iconRound}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        typeButton === 'link'
          ? {}
          : getButtonStyles(
              disabled,
              backgroundColor,
              borderColor,
              typeButton,
              borderRadius,
              borderWidth,
              marginTop,
              stylesContainer,
            )
      }
      onPress={onPress}>
      {prefix && prefix}
      <Text
        text={text}
        typeText={typeButton === 'link' ? 'Body' : 'SubHeading'}
        size={size ? size : typeButton === 'link' ? 'medium' : 'small'}
        fontFamily={
          typeButton === 'link' ? fontFamilies.poppinsSemiBold : undefined
        }
        color={
          disabled
            ? colors.desc
            : color ??
              (typeButton === 'link'
                ? colors.facebook
                : getColorText(color, typeButton))
        }
      />
      {loading && (
        <ActivityIndicator color={disabled ? colors.desc : colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
