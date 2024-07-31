import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useAppDispatch} from '../../app';
import {Container} from '../../components';
import {colors} from '../../constants';
import {authServices} from '../../services';
import {FormLoginData, setUserToLS} from '../../utils';
import {authActions} from './authSlice';
import {HeaderAuth, LoginForm} from './components';
import {User} from '../../models';

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const initialValues: FormLoginData = {
    email: '',
    password: '',
  };
  const signInMutation = useMutation({
    mutationFn: (body: FormLoginData) =>
      authServices.signInWithEmailAndPassword(body),
    onSuccess: currentUser => {
      dispatch(authActions.setUser(currentUser as User));
      setUserToLS(currentUser as User);
    },
  });
  const handleLoginFormSubmit = (formValues: FormLoginData) => {
    signInMutation.mutate(formValues);
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
        loading={signInMutation.isPending}
        initialValues={initialValues}
        onSubmit={handleLoginFormSubmit}
      />
    </Container>
  );
};

export default LoginScreen;
