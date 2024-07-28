import React from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
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
}) => {
  const getBackgroundColor = (): ColorValue =>
    backgroundColor ?? (typeButton === 'outline' ? colors.white : colors.dark);

  const getBorderColor = (): ColorValue =>
    borderColor ?? (typeButton === 'outline' ? colors.gray2 : colors.dark);

  const getColorText = (): ColorValue =>
    color ?? (typeButton === 'outline' ? colors.dark : colors.white);

  return (
    <TouchableOpacity
      style={[
        globalStyles.row,
        globalStyles.center,
        {
          minHeight: spacings.space_50,
          backgroundColor: getBackgroundColor(),
          borderRadius,
          borderWidth,
          borderColor: getBorderColor(),
          marginTop,
        },
        stylesContainer,
      ]}
      onPress={onPress}>
      <Text
        text={text}
        typeText="SubHeading"
        size="small"
        color={getColorText()}
      />
    </TouchableOpacity>
  );
};

export default Button;
