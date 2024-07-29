import React from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {FormLoginData} from '../../utils';
import {HeaderAuth, LoginForm} from './components';

const LoginScreen = () => {
  const initialValues: FormLoginData = {
    email: '',
    password: '',
  };
  const handleLoginFormSubmit = (formValues: FormLoginData) => {
    // Call API Login
    console.log({formValues});
  };
  return (
    <Container
      isScrollView={false}
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
