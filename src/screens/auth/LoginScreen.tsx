import React, {useState} from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {FormLoginData} from '../../utils';
import {HeaderAuth, LoginForm} from './components';

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: FormLoginData = {
    email: '',
    password: '',
  };
  const handleLoginFormSubmit = (formValues: FormLoginData) => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
        loading={isLoading}
        initialValues={initialValues}
        onSubmit={handleLoginFormSubmit}
      />
    </Container>
  );
};

export default LoginScreen;
