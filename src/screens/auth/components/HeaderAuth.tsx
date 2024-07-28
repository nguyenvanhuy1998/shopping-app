import React from 'react';
import {Image, Section, Text} from '../../../components';
import {images, spacings} from '../../../constants';

type Props = {
  title: string;
  desc: string;
};

const HeaderAuth = ({title, desc}: Props) => {
  return (
    <Section>
      <Image source={images.logo} height={84} resizeMode="contain" />
      <Text text={title} typeText="Heading" size="small" />
      <Text
        text={desc}
        marginTop={spacings.space_8}
        typeText="Body"
        size="medium"
      />
    </Section>
  );
};

export default HeaderAuth;
