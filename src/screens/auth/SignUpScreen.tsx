import React from 'react';
import {Container} from '../../components';
import {HeaderAuth, SignUpForm} from './components';
import {FormSignUpData} from '../../utils';
import {colors} from '../../constants';

const SignUpScreen = () => {
  const initialValues: FormSignUpData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termAndCondition: false,
  };
  const handleSignUpFormSubmit = (formValues: FormSignUpData) => {
    console.log({formValues});
  };
  return (
    <Container
      isScrollView={false}
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <HeaderAuth title="Sign Up" desc="Create an new account" />
      <SignUpForm
        initialValues={initialValues}
        onSubmit={handleSignUpFormSubmit}
      />
    </Container>
  );
};

export default SignUpScreen;
