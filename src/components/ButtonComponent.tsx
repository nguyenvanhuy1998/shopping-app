import React, {ReactNode} from 'react';
import {ColorValue, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../constants';
import {globalStyles} from '../styles';
import {getBackgroundColor, getDimensionSizeRound} from '../utils';

type Props = {
  stylesContainer?: StyleProp<ViewStyle>;
  iconRound?: ReactNode;
  outline?: boolean;
  sizeRound?:
    | 'extraLarge56'
    | 'extraLarge50'
    | 'large40'
    | 'medium35'
    | 'medium30'
    | 'small20';
  onPress: () => void;
  borderRadius?: number;
  backgroundColor?: ColorValue;
  type?: 'link' | 'text' | 'round';
  isShadow?: boolean;
};

const ButtonComponent = ({
  stylesContainer,
  iconRound,
  borderRadius = 100,
  backgroundColor = colors.dark,
  outline,
  sizeRound,
  isShadow,
  type,
  onPress,
}: Props) => {
  if (type === 'round') {
    return (
      <TouchableOpacity
        style={[
          globalStyles.center,
          {
            width: getDimensionSizeRound(sizeRound),
            height: getDimensionSizeRound(sizeRound),
            borderRadius,
            backgroundColor: getBackgroundColor(outline, backgroundColor),
          },
          isShadow ? globalStyles.shadow : {},
          stylesContainer,
        ]}
        onPress={onPress}>
        {iconRound && iconRound}
      </TouchableOpacity>
    );
  }
  return null;
};

export default ButtonComponent;
