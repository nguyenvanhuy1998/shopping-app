import {useQuery} from '@tanstack/react-query';
import {useAppDispatch} from '../app';
import {authActions} from '../screens/auth/authSlice';
import {getUserFromLS} from '../utils';
import SplashScreen from 'react-native-splash-screen';

const useCurrentUser = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await getUserFromLS();
      if (res) {
        dispatch(authActions.setUser(res));
      }
      SplashScreen.hide();
      return res;
    },
  });
};

export default useCurrentUser;
