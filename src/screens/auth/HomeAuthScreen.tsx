import {Button, Section} from '@bsdaoquang/rncomponent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {colors, fontFamilies, images} from '../../constants';
import {AuthStackParamList} from '../../routers/AuthNavigator';
import {globalStyles} from '../../styles';

const HomeAuthScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <ImageBackground source={images.bgLogin} style={globalStyles.container}>
      <View style={globalStyles.container} />
      <Section styles={styles.section}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('WelcomeScreen')}
          textStyleProps={styles.loginButtonText}
        />
        <Button
          title="Sign Up"
          color="transparent"
          styles={styles.signUpButton}
          textStyleProps={styles.signUpButtonText}
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </Section>
    </ImageBackground>
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
