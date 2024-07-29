import React from 'react';
import {Control, useController} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, iconSizes, spacings} from '../constants';
import Row from './Row';
import Text from './Text';

type Props = {
  text?: string;
  name: string;
  control: Control<any>;
};

const CheckBox = ({text, name, control}: Props) => {
  const {
    field: {value, onChange},
    fieldState: {invalid, error},
  } = useController({
    name,
    control,
  });
  return (
    <>
      <Row
        onPress={() => onChange(!value)}
        alignItems="flex-start"
        gap={spacings.space_8}
        justifyContent="flex-start">
        <MaterialCommunityIcons
          name={!value ? 'checkbox-blank-outline' : 'checkbox-marked'}
          size={iconSizes.small}
          color={colors.desc}
        />
        {text && <Text flex={1} text={text} typeText="Body" size="small" />}
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
    </>
  );
};

export default CheckBox;

const styles = StyleSheet.create({});
