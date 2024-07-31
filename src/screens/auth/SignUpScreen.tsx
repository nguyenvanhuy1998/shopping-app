import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {AuthStackParamList} from '../../routers/AuthNavigator';
import {authServices} from '../../services';
import {FormSignUpData} from '../../utils';
import {HeaderAuth, SignUpForm} from './components';

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
    onSuccess: currentUser => {
      navigation.navigate('AuthSuccess', {
        currentUser,
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
