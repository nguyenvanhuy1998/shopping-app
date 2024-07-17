import {Button, Section} from '@bsdaoquang/rncomponent';
import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {colors, fontFamilies, images} from '../../constants';
import {globalStyles} from '../../styles';

const HomeAuthScreen: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <ImageBackground source={images.bgLogin} style={globalStyles.container}>
        <View style={globalStyles.container} />
        <Section styles={styles.section}>
          <Button
            title="Login"
            onPress={() => {}}
            textStyleProps={styles.loginButtonText}
          />
          <Button
            title="Sign Up"
            color="transparent"
            styles={styles.signUpButton}
            textStyleProps={styles.signUpButtonText}
            onPress={() => {}}
          />
        </Section>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  section: {
    paddingVertical: 16,
  },
  loginButtonText: {
    fontFamily: fontFamilies.poppinsBold,
    fontSize: 16,
    color: colors.dark,
  },
  signUpButton: {
    borderColor: colors.white,
    borderWidth: 2,
  },
  signUpButtonText: {
    fontFamily: fontFamilies.poppinsBold,
    fontSize: 16,
  },
});

export default HomeAuthScreen;
