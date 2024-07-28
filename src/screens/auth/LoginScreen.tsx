import React from 'react';
import {Container} from '../../components';
import {HeaderAuth} from './components';

const LoginScreen = () => {
  return (
    <Container>
      <HeaderAuth
        title="Welcome!"
        desc="please login or sign up to continue our app"
      />
    </Container>
  );
};

export default LoginScreen;
