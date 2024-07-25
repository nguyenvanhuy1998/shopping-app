import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthNavigator, MainNavigator} from './src/routers';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      {isLogin ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
