import {useQuery} from '@tanstack/react-query';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useAppDispatch, useAppSelector} from '../app';
import {authActions, selectIsLoggedIn} from '../screens/auth/authSlice';
import {getUserFromLS} from '../utils';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Router: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await getUserFromLS();
      if (res) {
        await dispatch(authActions.setUser(res));
      }
      SplashScreen.hide();

      return res;
    },
  });
  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
};

export default Router;
