import {CloseCircle, Eye, EyeSlash} from 'iconsax-react-native';
import React, {ReactNode, useState} from 'react';
import {Control, useController} from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {colors, iconSizes, spacings} from '../constants';
import {globalStyles} from '../styles';
import Row from './Row';
import Text from './Text';

interface InputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  isPassword?: boolean;
  typeInput?: 'secondary';
  stylesInputContainer?: StyleProp<ViewStyle>;
  stylesInput?: StyleProp<TextStyle>;
}

const Input = ({
  name,
  control,
  label,
  typeInput,
  isPassword,
  stylesInputContainer,
  stylesInput,
  prefix,
  suffix,
  ...rest
}: InputProps) => {
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
  if (typeInput === 'secondary') {
    return (
      <View style={[styles.inputSecondaryContainer, stylesInputContainer]}>
        {prefix && prefix}
        <TextInput
          {...rest}
          style={[styles.inputSecondary, globalStyles.text, stylesInput]}
          ref={ref}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
        {suffix && suffix}
      </View>
    );
  }
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
  inputSecondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacings.space_8,
    minHeight: spacings.space_50,
    backgroundColor: colors.gray,
    paddingHorizontal: spacings.space_16,
    flex: 1,
    borderRadius: spacings.space_30,
  },
  input: {
    marginRight: spacings.space_8,
    flex: 1,
    height: '100%',
    paddingVertical: 0,
  },
  inputSecondary: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
  },
});
