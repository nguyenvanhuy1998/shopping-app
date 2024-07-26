import React from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {colors, spacings} from '../constants';
import {globalStyles} from '../styles';
import TextComponent from './TextComponent';

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
}

const ButtonComponent: React.FC<Props> = ({
  onPress,
  text,
  stylesContainer,
  typeButton,
  backgroundColor,
  borderRadius = 100,
  borderWidth = 1,
  borderColor,
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
        },
        stylesContainer,
      ]}
      onPress={onPress}>
      <TextComponent
        text={text}
        typeText="SubHeading"
        size="small"
        color={getColorText()}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
