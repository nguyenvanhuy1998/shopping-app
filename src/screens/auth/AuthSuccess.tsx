import {RouteProp, useRoute} from '@react-navigation/native';
import {TickCircle} from 'iconsax-react-native';
import React from 'react';
import {useAppDispatch} from '../../app';
import {Button, Container, Section, Text} from '../../components';
import {colors, iconSizes, spacings} from '../../constants';
import {AuthStackParamList} from '../../routers/AuthNavigator';
import {globalStyles} from '../../styles';
import {setUserToLS} from '../../utils';
import {authActions} from './authSlice';

const AuthSuccess = () => {
  const route = useRoute<RouteProp<AuthStackParamList>>();
  const dispatch = useAppDispatch();
  const handleStartShopping = async () => {
    const currentUser = route.params?.currentUser;
    if (currentUser) {
      dispatch(authActions.setUser(currentUser));
      await setUserToLS(currentUser);
    }
  };
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <Section styles={[globalStyles.container, globalStyles.center]}>
        <TickCircle size={iconSizes.extraLarge50} color={colors.success} />
        <Text
          marginTop={spacings.space_24}
          text="Successfully!"
          typeText="Heading"
        />
        <Text
          textAlign="center"
          text="You have successfully registered in our app and start working in it"
          typeText="Body"
        />
      </Section>
      <Section>
        <Button text="Start Shopping" onPress={handleStartShopping} />
      </Section>
    </Container>
  );
};

export default AuthSuccess;
