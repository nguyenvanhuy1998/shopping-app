import React from 'react';
import {Container} from '../../components';
import {HeaderAuth, SignUpForm} from './components';
import {FormSignUpData} from '../../utils';

const SignUpScreen = () => {
  const initialValues: FormSignUpData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const handleSignUpFormSubmit = (formValues: FormSignUpData) => {};
  return (
    <Container>
      <HeaderAuth title="Sign Up" desc="Create an new account" />
      <SignUpForm
        initialValues={initialValues}
        onSubmit={handleSignUpFormSubmit}
      />
    </Container>
  );
};

export default SignUpScreen;
