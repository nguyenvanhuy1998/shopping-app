import React from 'react';
import {ImageComponent, Section, TextComponent} from '../../../components';
import {images, spacings} from '../../../constants';

type Props = {
  title: string;
  desc: string;
};

const HeaderAuth = ({title, desc}: Props) => {
  return (
    <Section>
      <ImageComponent source={images.logo} height={84} resizeMode="contain" />
      <TextComponent text={title} typeText="Heading" size="small" />
      <TextComponent
        text={desc}
        marginTop={spacings.space_8}
        typeText="Body"
        size="medium"
      />
    </Section>
  );
};

export default HeaderAuth;
