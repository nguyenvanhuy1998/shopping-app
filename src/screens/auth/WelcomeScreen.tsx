import React from 'react';
import {Container, TextComponentOld} from '../../components';
import {colors} from '../../constants';

const WelcomeScreen = () => {
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}
      barStyle="dark-content"
      bgBarStyle={colors.white}>
      <TextComponentOld text="123" />
    </Container>
  );
};

export default WelcomeScreen;
