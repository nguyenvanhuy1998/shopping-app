/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image, Text} from '../../../components';
import {colors, fontFamilies, iconSizes, spacings} from '../../../constants';
import {OnboardingProps} from '../data';

type Props = {
  item: OnboardingProps;
  index: number;
};
const SlideWidth = iconSizes.screen_w - spacings.space_32;
const SlideHeight = (SlideWidth * 400) / 344;
const OnboardingItem = ({item, index}: Props) => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          width: iconSizes.screen_w,
        },
      ]}>
      <Image
        source={item.image}
        width={SlideWidth}
        height={SlideHeight}
        styles={styles.image}
      />
      <Text
        marginTop={spacings.space_32}
        text={item.title}
        typeText="Heading"
      />
      <Text
        marginTop={spacings.space_8}
        text={item.desc}
        typeText="SubHeading"
        size="small"
        color={colors.desc}
        fontFamily={fontFamilies.poppinsRegular}
      />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: spacings.space_16,
    flex: 1,
    paddingHorizontal: spacings.space_16,
  },
  image: {},
});
