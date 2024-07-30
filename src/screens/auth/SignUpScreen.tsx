import React from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {
  FormSignUpData,
  getFirebaseErrorMessage,
  isFirebaseError,
} from '../../utils';
import {HeaderAuth, SignUpForm} from './components';
import {useMutation} from '@tanstack/react-query';
import authServices from '../../services/authServices';
import Toast from 'react-native-toast-message';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../routers/AuthNavigator';

const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const initialValues: FormSignUpData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termAndCondition: false,
  };

  const signUpMutation = useMutation({
    mutationFn: (body: FormSignUpData) =>
      authServices.signUpWithEmailAndPassword(body),
    onSuccess: () => navigation.navigate('AuthSuccess'),
    onError: error => {
      const errorMessage = isFirebaseError(error)
        ? getFirebaseErrorMessage(error)
        : 'An unexpected error occurred';
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    },
  });
  const handleSignUpFormSubmit = (formValues: FormSignUpData) => {
    signUpMutation.mutate(formValues);
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
