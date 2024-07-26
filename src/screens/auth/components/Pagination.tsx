import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OnboardingProps} from '../data';
import {SharedValue} from 'react-native-reanimated';
import Dot from './Dot';
import {globalStyles} from '../../../styles';
import {spacings} from '../../../constants';

type Props = {
  data: OnboardingProps[];
  animatedValue: SharedValue<number>;
};

const Pagination = ({data, animatedValue}: Props) => {
  return (
    <View style={[globalStyles.row, styles.paginationContainer]}>
      {data.map((_, index) => (
        <Dot key={index} index={index} animatedValue={animatedValue} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    gap: spacings.space_8,
  },
});
