import React from 'react';
import {AuthNavigator, MainNavigator} from './src/routers';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {1 > 2 ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
