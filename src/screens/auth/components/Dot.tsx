import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {colors, iconSizes} from '../../../constants';

type Props = {
  index: number;
  animatedValue: SharedValue<number>;
};

const Dot = ({index, animatedValue}: Props) => {
  const dotAnimatedStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      animatedValue.value,
      [
        (index - 1) * iconSizes.screen_w,
        index * iconSizes.screen_w,
        (index + 1) * iconSizes.screen_w,
      ],
      [8, 20, 8],
      Extrapolation.CLAMP,
    );
    const backgroundColorAnimation = interpolateColor(
      animatedValue.value,
      [
        (index - 1) * iconSizes.screen_w,
        index * iconSizes.screen_w,
        (index + 1) * iconSizes.screen_w,
      ],
      [colors.gray4, colors.dark, colors.gray4],
    );
    return {
      width: widthAnimation,
      backgroundColor: backgroundColorAnimation,
    };
  });
  return <Animated.View style={[styles.dot, dotAnimatedStyle]} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 100,
  },
});
