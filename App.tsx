import React from 'react';
import {HomeScreen} from './src/screens';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <HomeScreen />
    </>
  );
};

export default App;
