import React, {ReactNode} from 'react';
import {
  FlexAlignType,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';

type Props = {
  children: ReactNode;
  onPress?: () => void;
  touchableProps?: TouchableOpacityProps;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  styles?: StyleProp<ViewStyle>;
  flex?: number;
  marginTop?: number;
};

const Row = ({
  onPress,
  children,
  styles,
  justifyContent = 'space-between',
  touchableProps,
  alignItems = 'center',
  flex = 0,
  flexWrap = 'wrap',
  marginTop,
}: Props) => {
  if (onPress) {
    return (
      <TouchableOpacity
        {...touchableProps}
        style={[
          globalStyles.row,
          {
            justifyContent,
            alignItems,
            flex,
            flexWrap,
            marginTop,
          },
          styles,
        ]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <View
      {...touchableProps}
      style={[
        globalStyles.row,
        {
          justifyContent,
          alignItems,
          flex,
          flexWrap,
          marginTop,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Row;
