import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import MarterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  colors,
  fontFamilies,
  fontSizes,
  iconSizes,
  spacings,
} from '../../../constants';
import {globalStyles} from '../../../styles';

type Props = {
  onPress?: () => void;
  flatListIndex: SharedValue<number>;
  dataLength: number;
};

const CustomButton = ({onPress, flatListIndex, dataLength}: Props) => {
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(160)
          : withSpring(60),
    };
  });
  const iconArrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1 ? withTiming(100) : 0,
        },
      ],
    };
  });
  const textButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          globalStyles.center,
          styles.buttonContainer,
          buttonAnimatedStyle,
        ]}>
        <Animated.Text style={[styles.textButton, textButtonAnimatedStyle]}>
          Get Started
        </Animated.Text>
        <Animated.View style={iconArrowAnimatedStyle}>
          <MarterialIcon
            name="arrow-right-alt"
            color={colors.white}
            size={iconSizes.medium}
          />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: spacings.space_10 * 6,
    borderRadius: 100,
    backgroundColor: colors.dark,
  },
  textButton: {
    position: 'absolute',
    color: colors.white,
    fontSize: fontSizes.size16,
    fontFamily: fontFamilies.poppinsBold,
  },
});
