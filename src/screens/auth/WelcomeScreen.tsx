import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {colors, images, spacings} from '../../constants';
import {globalStyles} from '../../styles';
import {ButtonComponent, Section} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../routers/AuthNavigator';

const WelcomeScreen = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
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
