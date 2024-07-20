import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  colors,
  fontFamilies,
  fontSizes,
  images,
  spacings,
} from '../../constants';
import {globalStyles} from '../../styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ImageComponent, Section, TextComponent} from '../../components';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Discover Best Places',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: images.onboarding3,
  },
];
const OnboardScreen = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  const renderButtonLabel = (label: string) => {
    return (
      <View style={styles.buttonLabelContainer}>
        <TextComponent
          text={label}
          fontSize={fontSizes.size16}
          color={colors.title}
          fontFamily={fontFamilies.poppinsSemiBold}
        />
      </View>
    );
  };
  const renderItem = ({item}: {item: Slide}) => {
    return (
      <View style={styles.itemContainer}>
        <ImageComponent
          width={spacings.width - spacings.space_32}
          height={400}
          source={item.image}
          resizeMode="contain"
        />
        <TextComponent
          text={item.title}
          fontFamily={fontFamilies.poppinsBold}
          color={colors.title}
          fontSize={fontSizes.h1}
        />
        <TextComponent
          styles={{
            marginTop: spacings.space_8,
          }}
          text={item.description}
          fontSize={fontSizes.size14}
          color={colors.title}
          textAlign="center"
        />
      </View>
    );
  };
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        activeDotStyle={styles.activeDotSlide}
        showSkipButton
        renderNextButton={() => renderButtonLabel('Next')}
        renderSkipButton={() => renderButtonLabel('Skip')}
        renderDoneButton={() => renderButtonLabel('Done')}
        onDone={() => setShowHomePage(true)}
      />
    );
  }
  return (
    <View style={[globalStyles.container, globalStyles.center]}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacings.space_16,
  },
  activeDotSlide: {
    backgroundColor: colors.primary,
    width: spacings.space_32,
  },
  buttonLabelContainer: {
    padding: spacings.space_12,
  },
});
