import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, spacings} from '../constants';
import {globalStyles} from '../styles';
import Text from './Text';

interface Props {
  stylesContainer?: StyleProp<ViewStyle>;
  typeButton?: 'outline';
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
    globalStyles.row,
    globalStyles.center,
    {
      minHeight: spacings.space_50,
      backgroundColor: disabled ? colors.gray : getBackgroundColor(),
      borderRadius,
      borderWidth,
      borderColor: disabled ? colors.gray : getBorderColor(),
      marginTop,
      gap: spacings.space_8,
    },
    stylesContainer,
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyles}
      onPress={onPress}>
      {prefix && prefix}
      <Text
        text={text}
        typeText="SubHeading"
        size="small"
        color={disabled ? colors.desc : getColorText()}
      />
      {loading && (
        <ActivityIndicator color={disabled ? colors.desc : colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
