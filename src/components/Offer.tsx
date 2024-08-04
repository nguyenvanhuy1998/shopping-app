import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Offer as OfferModel} from '../models';
import {ImageBackground} from 'react-native';
import {colors, fontFamilies, iconSizes, spacings} from '../constants';
import Text from './Text';
import Button from './Button';

type Props = {
  item: OfferModel;
  onPress: (offer: OfferModel) => void;
};
const ITEM_WIDTH = iconSizes.screen_w - spacings.space_32 - 260 / 3;
const ITEM_HEIGHT = (ITEM_WIDTH * 160) / 260;
const Offer = ({item, onPress}: Props) => {
  if (item.files && item.files.length > 0) {
    return (
      <ImageBackground
        source={{
          uri: item.files[0].url,
        }}
        resizeMode="cover"
        imageStyle={{
          borderRadius: spacings.space_16,
        }}
        style={styles.itemContainer}>
        <View style={styles.contentItemContainer}>
          <Text
            text={`${item.percent}% Off`}
            typeText="Heading"
            size="medium"
          />
          <Text
            text={item.title}
            typeText="SubHeading"
            size="small"
            fontFamily={fontFamilies.poppinsRegular}
          />
          <Text
            marginTop={spacings.space_10}
            text={`With code: ${item.code.toUpperCase()}`}
            typeText="Body"
            size="small"
            fontFamily={fontFamilies.poppinsSemiBold}
          />
          <Button
            marginTop={spacings.space_16}
            text="Get Now"
            size="small"
            typeText="Small"
            width={70}
            onPress={() => onPress(item)}
          />
        </View>
      </ImageBackground>
    );
  } else {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: colors.gray4,
            borderRadius: spacings.space_16,
          },
        ]}>
        <View style={styles.contentItemContainer}>
          <Text
            text={`${item.percent}% Off`}
            typeText="Heading"
            size="medium"
          />
          <Text
            text={item.title}
            typeText="SubHeading"
            size="small"
            fontFamily={fontFamilies.poppinsRegular}
          />
          <Text
            marginTop={spacings.space_10}
            text={`With code: ${item.code.toUpperCase()}`}
            typeText="Body"
            size="small"
            fontFamily={fontFamilies.poppinsSemiBold}
          />
          <Button
            marginTop={spacings.space_16}
            text="Get Now"
            size="small"
            typeText="Small"
            width={70}
            onPress={() => onPress(item)}
          />
        </View>
      </View>
    );
  }
};

export default Offer;

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    paddingVertical: spacings.space_16,
    paddingLeft: spacings.space_16,
  },
  contentItemContainer: {
    width: '70%',
  },
});
