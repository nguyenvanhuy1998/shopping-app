import {StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles';

type Props = {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  flex?: number;
};

const Section = ({children, styles, flex}: Props) => {
  return (
    <View
      style={[
        globalStyles.section,
        {
          flex: flex ?? 0,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Section;
