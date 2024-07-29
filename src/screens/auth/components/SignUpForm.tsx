import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, CheckBox, Input, Row, Section, Text} from '../../../components';
import {colors, spacings} from '../../../constants';
import {FormSignUpData, schema} from '../../../utils';
import {globalStyles} from '../../../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../../routers/AuthNavigator';
import {yupResolver} from '@hookform/resolvers/yup';

interface SignUpProps {
  initialValues?: FormSignUpData;
  onSubmit?: (formValues: FormSignUpData) => void;
}

const SignUpForm = ({initialValues, onSubmit}: SignUpProps) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const {control, handleSubmit} = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (formValues: FormSignUpData) => {
    onSubmit?.(formValues);
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyles.contentScrollContainer}>
      <Section styles={globalStyles.container} marginTop={spacings.space_24}>
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
        <CheckBox
          name="termAndCondition"
          control={control}
          text="By creating an account you have to agree with our term & condition"
        />
      </Section>
      <Section>
        <Button
          marginTop={spacings.space_56}
          text="Sign Up"
          onPress={handleSubmit(handleFormSubmit)}
        />
        <Row
          styles={{gap: spacings.space_4}}
          marginTop={spacings.space_12}
          justifyContent="center">
          <Text text="Already have an account?" typeText="Body" size="medium" />
          <Button
            typeButton="link"
            text="Login"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </Row>
      </Section>
    </ScrollView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
