import React from 'react';
import {Menu} from '../assets/svgs';
import {
  ButtonComponent,
  Container,
  ImageComponent,
  Row,
  Section,
  TextComponent,
} from '../components';
import {colors, fontSizes, iconSizes, images, spacings} from '../constants';

const TemplateScreen = () => {
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
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
      <Section>
        <Row>
          <ButtonComponent
            onPress={() => {}}
            prefix={<Menu />}
            width={iconSizes.large}
            height={iconSizes.large}
          />
          <ButtonComponent
            onPress={() => {}}
            backgroundColor={colors.gray2}
            prefix={
              <ImageComponent
                width={iconSizes.extraExtraLarge}
                height={iconSizes.extraExtraLarge}
                source={images.avatar}
              />
            }
            width={iconSizes.extraExtraLarge}
            height={iconSizes.extraExtraLarge}
          />
        </Row>
      </Section>
    </Container>
  );
};

export default TemplateScreen;
