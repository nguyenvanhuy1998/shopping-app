import React, {ReactNode} from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, iconSizes} from '../constants';
import {globalStyles} from '../styles';

type Props = {
  stylesContainer?: StyleProp<ViewStyle>;
  prefix?: ReactNode;
  onPress: () => void;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: ColorValue;
};

const ButtonComponent = ({
  stylesContainer,
  prefix,
  width = iconSizes.extraLarge,
  height = iconSizes.extraLarge,
  borderRadius = 100,
  backgroundColor = colors.dark,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        globalStyles.center,
        {
          width,
          height,
          borderRadius,
          backgroundColor,
        },
        stylesContainer,
      ]}
      onPress={onPress}>
      {prefix && prefix}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonRound: {},
});
