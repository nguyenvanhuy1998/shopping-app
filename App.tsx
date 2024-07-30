import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthNavigator, MainNavigator} from './src/routers';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/app/queryClient';
import Toast from 'react-native-toast-message';

if (__DEV__) {
  require('./src/app/reactotron.ts');
}
const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isLogin ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
