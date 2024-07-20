import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthNavigator, MainNavigator} from './src/routers';
import SplashScreen from './src/screens/SplashScreen';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWelcome(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <NavigationContainer>
      {isWelcome ? (
        <SplashScreen />
      ) : !isLogin ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
