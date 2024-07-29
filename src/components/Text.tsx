import React from 'react';
import {
  ColorValue,
  StyleProp,
  Text as TextCustom,
  TextStyle,
} from 'react-native';
import {getTextStyle} from '../utils';

type Props = {
  text?: string;
  styles?: StyleProp<TextStyle>;
  marginTop?: number;
  typeText?: 'Heading' | 'SubHeading' | 'Body';
  size?: 'small' | 'medium' | 'large';
  color?: ColorValue;
  fontFamily?: string;
  textAlign?: 'left' | 'right' | 'justify' | 'auto';
  lineHeight?: number;
  flex?: number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
};

const Text: React.FC<Props> = ({
  text,
  marginTop,
  styles,
  typeText,
  size,
  color,
  fontFamily,
  textAlign = 'left',
  flex,
  lineHeight,
  textDecorationLine,
}) => {
  return (
    <TextCustom
      style={[
        {marginTop, textDecorationLine, flex},
        getTextStyle(typeText, size, color, fontFamily, textAlign, lineHeight),
        styles,
      ]}>
      {text}
    </TextCustom>
  );
};

export default Text;
