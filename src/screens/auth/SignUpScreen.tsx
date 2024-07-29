import React, {useState} from 'react';
import {Container} from '../../components';
import {HeaderAuth, SignUpForm} from './components';
import {FormSignUpData} from '../../utils';
import {colors} from '../../constants';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: FormSignUpData = {
    email: '',
    password: '',
    confirmPassword: '',
    termAndCondition: false,
  };
  const handleSignUpFormSubmit = async (formValues: FormSignUpData) => {
    setIsLoading(true);
    try {
      const response = await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      const user = response.user;
      if (user) {
        console.log({user});
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('Sign up failed', error);
    }
  };
  return (
    <Container
      isScrollView={false}
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <HeaderAuth title="Sign Up" desc="Create an new account" />
      <SignUpForm
        loading={isLoading}
        initialValues={initialValues}
        onSubmit={handleSignUpFormSubmit}
      />
    </Container>
  );
};

export default SignUpScreen;
