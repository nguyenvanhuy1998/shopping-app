import React from 'react';
import {Container, TextComponent} from '../components';
import {colors, sizes} from '../constants';

const TemplateScreen = () => {
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <TextComponent text="Welcome," type="bigTitle25" />
      <TextComponent text="Our Fashions App" fontSize={sizes.bigTitle20} />
      <TextComponent
        text="Search..."
        fontSize={sizes.text13}
        color={colors.gray2}
      />
      <TextComponent text="50% Off" type="bigTitle25" />
      <TextComponent
        text="On everything today"
        fontSize={sizes.title16}
        color={colors.dark}
      />
      <TextComponent text="With code:FSCREATION" />
      <TextComponent text="Get Now" fontSize={sizes.desc10} />
      <TextComponent text="New Arrivals" type="title18" />
      <TextComponent text="The Marc Jacobs" type="text14" />
      <TextComponent
        lineHeight={15}
        text="Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer."
      />
    </Container>
  );
};

export default TemplateScreen;
