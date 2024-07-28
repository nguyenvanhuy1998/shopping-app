import {CloseCircle, Eye, EyeSlash} from 'iconsax-react-native';
import React, {ReactNode, useState} from 'react';
import {Control, useController} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {colors, iconSizes, spacings} from '../constants';
import {globalStyles} from '../styles';
import Row from './Row';
import Text from './Text';

interface InputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
}

const Input = ({name, control, label, isPassword, ...rest}: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(isPassword);
  const {
    field: {value, onChange, onBlur, ref},
    fieldState: {invalid, error},
  } = useController({
    name,
    control,
  });
  const handleChangeIconPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleClearText = () => {
    onChange('');
  };
  const renderIconSuffix = () => {
    if (isPassword) {
      const IconComponent = !isShowPassword ? Eye : EyeSlash;
      return (
        <IconComponent
          color={colors.dark}
          variant="Bold"
          size={iconSizes.small20}
          onPress={handleChangeIconPassword}
        />
      );
    }

    return value ? (
      <CloseCircle
        color={colors.dark}
        variant="Bold"
        size={iconSizes.small20}
        onPress={handleClearText}
      />
    ) : null;
  };
  return (
    <View style={styles.container}>
      {label && <Text text={label} typeText="SubHeading" size="small" />}
      <Row
        styles={[
          styles.inputContainer,
          {
            borderColor: invalid ? colors.dangerous : colors.gray3,
          },
        ]}>
        <TextInput
          {...rest}
          style={[styles.input, globalStyles.text]}
          ref={ref}
          secureTextEntry={isShowPassword}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
        {renderIconSuffix()}
      </Row>
      {invalid && (
        <Text
          marginTop={spacings.space_4}
          text={error?.message}
          typeText="Body"
          color={colors.dangerous}
          size="small"
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacings.space_16,
  },
  inputContainer: {
    alignItems: 'center',
    minHeight: spacings.space_32,
    marginTop: spacings.space_4,
    borderBottomWidth: 1,
  },
  input: {
    marginRight: spacings.space_8,
    flex: 1,
    height: '100%',
  },
});
