import {EyeSlash, TickCircle} from 'iconsax-react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Button, Input, Section} from '../../../components';
import {colors, iconSizes, spacings} from '../../../constants';
import {FormLoginData} from '../../../utils';

interface LoginProps {
  initialValues?: FormLoginData;
  onSubmit?: (formValues: FormLoginData) => void;
}

const LoginForm = ({initialValues, onSubmit}: LoginProps) => {
  const {control, handleSubmit} = useForm<FormLoginData>({
    defaultValues: initialValues,
  });
  const handleFormSubmit = (formValues: FormLoginData) => {
    console.log('Submit', formValues);
  };
  return (
    <Section marginTop={spacings.space_24}>
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
      <Button
        marginTop={spacings.space_56}
        text="Login"
        onPress={handleSubmit(handleFormSubmit)}
      />
    </Section>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
