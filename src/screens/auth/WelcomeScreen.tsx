import React from 'react';
import {Container, TextComponent} from '../../components';
import {colors} from '../../constants';

const WelcomeScreen = () => {
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}
      barStyle="dark-content"
      bgBarStyle={colors.white}>
      <TextComponent text="123" />
    </Container>
  );
};

export default WelcomeScreen;
