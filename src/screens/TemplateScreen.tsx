import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Badge,
  Filter,
  Heart,
  HeartBlack,
  Menu,
} from '../assets/svgs';
import {
  ButtonComponent,
  Container,
  ImageComponent,
  Section,
  TextComponent,
} from '../components';
import {
  colors,
  fontFamilies,
  fontSizes,
  iconSizes,
  images,
  spacings,
} from '../constants';
import {View} from 'react-native';
import {globalStyles} from '../styles';

const TemplateScreen = () => {
  return (
    <Container>
      {/* Section Text Component */}
      <Section>
        <TextComponent text="Welcome," type="size25" />
        <TextComponent text="Our Fashions App" fontSize={fontSizes.size20} />
        <TextComponent
          text="Search..."
          fontSize={fontSizes.size13}
          color={colors.gray2}
        />
        <TextComponent text="50% Off" type="size25" />
        <TextComponent
          text="On everything today"
          fontSize={fontSizes.size16}
          color={colors.dark}
        />
        <TextComponent text="With code:FSCREATION" />
        <TextComponent text="Get Now" fontSize={fontSizes.size10} />
        <TextComponent text="New Arrivals" type="size18" />
        <TextComponent text="The Marc Jacobs" type="size14" />
        <TextComponent
          lineHeight={spacings.space_15}
          text="Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer."
        />
      </Section>
      {/* Section Button Round Component */}
      <Section styles={[globalStyles.row, globalStyles.spaceBetween]}>
        <ButtonComponent
          type="round"
          sizeRound="medium35"
          onPress={() => {}}
          iconRound={<Menu />}
        />
        <ButtonComponent
          type="round"
          sizeRound="extraLarge56"
          onPress={() => {}}
          backgroundColor={colors.gray2}
          iconRound={
            <ImageComponent
              width={iconSizes.extraLarge56}
              height={iconSizes.extraLarge56}
              source={images.avatar}
            />
          }
        />
        <ButtonComponent
          type="round"
          sizeRound="extraLarge50"
          onPress={() => {}}
          iconRound={<Filter />}
        />
        <ButtonComponent
          type="round"
          onPress={() => {}}
          iconRound={<Heart />}
        />
        <ButtonComponent
          type="round"
          sizeRound="medium35"
          onPress={() => {}}
          iconRound={<ArrowLeft />}
        />
        <ButtonComponent
          type="round"
          sizeRound="medium30"
          onPress={() => {}}
          outline
          iconRound={<Badge />}
        />

        <ButtonComponent
          type="round"
          sizeRound="medium30"
          onPress={() => {}}
          outline
          iconRound={<HeartBlack />}
        />

        <ButtonComponent
          isShadow
          type="round"
          sizeRound="medium30"
          onPress={() => {}}
          outline
          iconRound={
            <>
              <Badge />
              <View style={[globalStyles.center, globalStyles.dot]}>
                <TextComponent
                  text="1"
                  color={colors.white}
                  fontSize={8}
                  fontFamily={fontFamilies.poppinsSemiBold}
                />
              </View>
            </>
          }
        />
        <ButtonComponent
          type="round"
          onPress={() => {}}
          sizeRound="medium30"
          borderRadius={7}
          outline
          iconRound={<ArrowRight />}
        />
      </Section>
    </Container>
  );
};

export default TemplateScreen;
