import {TickCircle} from 'iconsax-react-native';
import React from 'react';
import {Button, Container, Section, Text} from '../../components';
import {colors, iconSizes, spacings} from '../../constants';
import {globalStyles} from '../../styles';

const AuthSuccess = () => {
  const handleStartShopping = () => {};
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <Section styles={[globalStyles.container, globalStyles.center]}>
        <TickCircle size={iconSizes.extraLarge50} color={colors.success} />
        <Text
          marginTop={spacings.space_24}
          text="Successfully!"
          typeText="Heading"
        />
        <Text
          textAlign="center"
          text="You have successfully registered in our app and start working in it"
          typeText="Body"
        />
      </Section>
      <Section>
        <Button text="Start Shopping" onPress={handleStartShopping} />
      </Section>
    </Container>
  );
};

export default AuthSuccess;
