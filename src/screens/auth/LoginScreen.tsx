import React from 'react';
import {Container, Section} from '../../components';
import {HeaderAuth, LoginForm} from './components';
import {FormLoginData} from '../../utils';
import {colors} from '../../constants';

const LoginScreen = () => {
  const initialValues: FormLoginData = {
    email: '',
    password: '',
  };
  const handleLoginFormSubmit = (formValues: FormLoginData) => {};
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <HeaderAuth
        title="Welcome!"
        desc="please login or sign up to continue our app"
      />
      <LoginForm
        initialValues={initialValues}
        onSubmit={handleLoginFormSubmit}
      />
    </Container>
  );
};

export default LoginScreen;
