import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Button, Input, Section} from '../../../components';
import {colors, spacings} from '../../../constants';
import {FormSignUpData} from '../../../utils';

interface SignUpProps {
  initialValues?: FormSignUpData;
  onSubmit?: (formValues: FormSignUpData) => void;
}

const SignUpForm = ({initialValues, onSubmit}: SignUpProps) => {
  const {control, handleSubmit} = useForm({
    defaultValues: initialValues,
  });
  const handleFormSubmit = (formValues: FormSignUpData) => {
    console.log({formValues});
  };
  return (
    <Section marginTop={spacings.space_24}>
      <Input
        name="username"
        control={control}
        label="User Name"
        placeholder="Enter user name"
        placeholderTextColor={colors.desc}
        autoCapitalize="none"
      />
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
      <Input
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        placeholder="Enter password"
        placeholderTextColor={colors.desc}
        autoCapitalize="none"
        isPassword
      />
      <Button
        marginTop={spacings.space_56}
        text="Sign Up"
        onPress={handleSubmit(handleFormSubmit)}
      />
    </Section>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
