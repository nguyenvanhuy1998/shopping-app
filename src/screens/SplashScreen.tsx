import React from 'react';
import {ActivityIndicator, ImageBackground} from 'react-native';
import {colors, images} from '../constants';
import {globalStyles} from '../styles';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={images.splashImg}
      style={[globalStyles.container, globalStyles.center]}
      resizeMode="cover">
      <ActivityIndicator color={colors.white} size={20} />
    </ImageBackground>
  );
};

export default SplashScreen;
