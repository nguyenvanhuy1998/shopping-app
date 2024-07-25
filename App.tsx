import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {AuthNavigator, MainNavigator} from './src/routers';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer
    // onReady={() => {
    //   BootSplash.hide();
    // }}
    >
      {isLogin ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
