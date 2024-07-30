import {useMutation} from '@tanstack/react-query';
import {pick} from 'lodash';
import React from 'react';
import Toast from 'react-native-toast-message';
import authApi from '../../api/authApi';
import {Container} from '../../components';
import {colors} from '../../constants';
import {
  FormSignUpData,
  getFirebaseErrorMessage,
  isFirebaseError,
} from '../../utils';
import {HeaderAuth, SignUpForm} from './components';

const SignUpScreen = () => {
  const initialValues: FormSignUpData = {
    email: '',
    password: '',
    confirmPassword: '',
    termAndCondition: false,
  };
  const signUpMutation = useMutation({
    mutationFn: (body: Pick<FormSignUpData, 'email' | 'password'>) =>
      authApi.signUp(body),
  });

  const handleSignUpFormSubmit = (formValues: FormSignUpData) => {
    const body = pick(formValues, ['email', 'password']);
    signUpMutation.mutate(body, {
      onSuccess: res => {
        console.log({res});
      },
      onError: error => {
        if (isFirebaseError(error)) {
          const errorMessage = getFirebaseErrorMessage(error);
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: errorMessage,
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'An unknown error occurred. Please try again.',
          });
        }
      },
    });
  };
  return (
    <Container
      isScrollView={false}
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <HeaderAuth title="Sign Up" desc="Create an new account" />
      <SignUpForm
        loading={signUpMutation.isPending}
        initialValues={initialValues}
        onSubmit={handleSignUpFormSubmit}
      />
    </Container>
  );
};

export default SignUpScreen;
