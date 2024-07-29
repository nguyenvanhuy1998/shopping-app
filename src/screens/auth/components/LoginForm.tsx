/* eslint-disable @typescript-eslint/no-shadow */
import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Row, Section, Text} from '../../../components';
import {colors, spacings} from '../../../constants';
import {globalStyles} from '../../../styles';
import {FormLoginData, schema} from '../../../utils';
import {Apple, Facebook, Google} from 'iconsax-react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../../routers/AuthNavigator';

interface LoginProps {
  initialValues?: FormLoginData;
  onSubmit?: (formValues: FormLoginData) => void;
}
const loginSchema = schema.pick(['email', 'password']);

const LoginForm = ({initialValues, onSubmit}: LoginProps) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const {control, handleSubmit} = useForm<FormLoginData>({
    defaultValues: initialValues,
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit = async (formValues: FormLoginData) => {
    onSubmit?.(formValues);
  };
  return (
    <>
      <Section styles={globalStyles.container} marginTop={spacings.space_24}>
        <Input
          name="email"
          control={control}
          label="Email"
          placeholder="Enter email"
          placeholderTextColor={colors.desc}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          name="password"
          control={control}
          label="Password"
          placeholder="Enter password"
          placeholderTextColor={colors.desc}
          autoCapitalize="none"
          isPassword
        />
        <Row>
          <Button
            typeButton="link"
            text="Forgot password?"
            onPress={() => navigation.navigate('ForgotPassword')}
          />
          <Button
            typeButton="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </Row>
      </Section>
      <Section>
        <Button text="Login" onPress={handleSubmit(handleFormSubmit)} />
        <Row
          marginTop={spacings.space_12}
          styles={[
            globalStyles.alignCenter,
            {
              gap: spacings.space_4,
            },
          ]}>
          <View style={styles.line} />
          <Text text="or" typeText="Body" size="medium" color={colors.dark} />
          <View style={styles.line} />
        </Row>
        <Button
          marginTop={spacings.space_12}
          backgroundColor={colors.facebook}
          text="Continue with Facebook"
          prefix={<Facebook variant="Bold" color={colors.white} />}
        />
        <Button
          marginTop={spacings.space_16}
          typeButton="outline"
          text="Continue with Google"
          prefix={<Google variant="Bold" color={colors.dark} />}
          borderColor={colors.gray3}
          color={colors.desc}
        />
        <Button
          marginTop={spacings.space_16}
          typeButton="outline"
          text="Continue with Apple"
          prefix={<Apple variant="Bold" color={colors.dark} />}
          borderColor={colors.gray3}
          color={colors.desc}
        />
      </Section>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  line: {
    height: 1,
    flex: 1,
    backgroundColor: colors.gray3,
  },
});
