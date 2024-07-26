import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {colors, images, spacings} from '../../constants';
import {globalStyles} from '../../styles';
import {ButtonComponent, Section} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const inset = useSafeAreaInsets();
  const handleLogin = () => {};
  const handleSignUp = () => {};
  return (
    <ImageBackground
      source={images.welcomeBg}
      style={[globalStyles.container, globalStyles.jusEnd]}>
      <Section
        styles={[
          styles.bottomContainer,
          {
            paddingBottom: inset.bottom,
          },
        ]}>
        <ButtonComponent
          onPress={handleLogin}
          text="Login"
          typeButton="outline"
          borderColor={colors.white}
        />
        <ButtonComponent
          onPress={handleSignUp}
          text="Sign Up"
          borderWidth={2}
          borderColor={colors.white}
          backgroundColor={'transparent'}
        />
      </Section>
    </ImageBackground>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  bottomContainer: {
    gap: spacings.space_16,
  },
});
