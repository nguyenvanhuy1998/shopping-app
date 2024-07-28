import {StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles';

type Props = {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  flex?: number;
  marginTop?: number;
};

const Section = ({children, styles, flex, marginTop}: Props) => {
  return (
    <View
      style={[
        globalStyles.section,
        {
          flex: flex ?? 0,
          marginTop,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Section;
