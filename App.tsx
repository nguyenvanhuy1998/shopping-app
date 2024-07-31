import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Router} from './src/routers';
import {Provider} from 'react-redux';
import {queryClient, store} from './src/app';

if (__DEV__) {
  require('./src/app/reactotron.ts');
}
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
        <Toast />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
