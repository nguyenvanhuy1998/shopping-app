import React from 'react';
import {useAppDispatch} from '../../app';
import {Button, Container} from '../../components';
import {clearLS} from '../../utils';
import {authActions} from '../auth/authSlice';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    clearLS();
    dispatch(authActions.removeUser());
  };
  return (
    <Container>
      <Button text="Logout" onPress={handleLogout} />
    </Container>
  );
};

export default ProfileScreen;
