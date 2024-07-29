import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, fontFamilies, spacings} from '../constants';
import {globalStyles} from '../styles';
import Text from './Text';

interface Props {
  stylesContainer?: StyleProp<ViewStyle>;
  typeButton?: 'outline' | 'link';
  backgroundColor?: ColorValue;
  borderWidth?: number;
  borderColor?: ColorValue;
  onPress?: () => void;
  text?: string;
  borderRadius?: number;
  color?: ColorValue;
  marginTop?: number;
  loading?: boolean;
  disabled?: boolean;
  prefix?: ReactNode;
}

const Button: React.FC<Props> = ({
  onPress,
  text,
  stylesContainer,
  typeButton,
  backgroundColor,
  borderRadius = 100,
  borderWidth = 1,
  borderColor,
  marginTop,
  color,
  loading,
  disabled,
  prefix,
}) => {
  const getBackgroundColor = (): ColorValue =>
    backgroundColor ?? (typeButton === 'outline' ? colors.white : colors.dark);

  const getBorderColor = (): ColorValue =>
    borderColor ?? (typeButton === 'outline' ? colors.gray2 : colors.dark);

  const getColorText = (): ColorValue =>
    color ?? (typeButton === 'outline' ? colors.dark : colors.white);

  const buttonStyles: StyleProp<ViewStyle> = [
    styles.button,
    {
      backgroundColor: disabled ? colors.gray : getBackgroundColor(),
      borderRadius,
      borderWidth,
      borderColor: disabled ? colors.gray : getBorderColor(),
      marginTop,
    },
    stylesContainer,
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={typeButton === 'link' ? {} : buttonStyles}
      onPress={onPress}>
      {prefix && prefix}
      <Text
        text={text}
        typeText={typeButton === 'link' ? 'Body' : 'SubHeading'}
        size={typeButton === 'link' ? 'medium' : 'small'}
        fontFamily={
          typeButton === 'link' ? fontFamilies.poppinsSemiBold : undefined
        }
        color={
          disabled
            ? colors.desc
            : color ??
              (typeButton === 'link' ? colors.facebook : getColorText())
        }
      />
      {loading && (
        <ActivityIndicator color={disabled ? colors.desc : colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {
    minHeight: spacings.space_50,
    ...globalStyles.row,
    ...globalStyles.center,
    gap: spacings.space_8,
  },
});
