import React from 'react';
import {useAppSelector} from '../app';
import useCurrentUser from '../hooks/useCurrentUser';
import {selectIsLoggedIn} from '../screens/auth/authSlice';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Router: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  useCurrentUser();
  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
};

export default Router;
