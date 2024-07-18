import {Text} from '@bsdaoquang/rncomponent';
import React, {FC} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {colors, fontFamilies, sizes} from '../constants';

type TextType = 'bigTitle25' | 'title18' | 'text' | 'desc';

interface Props {
  text: string;
  size?: number;
  font?: string;
  flex?: number;
  numberOfLine?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  type?: TextType;
}
const TextComponentOld: FC<Props> = ({
  text,
  size,
  font,
  flex,
  numberOfLine,
  color,
  styles,
  type,
}) => {
  let fontSize: number = sizes.text13;
  switch (type) {
    case 'bigTitle25':
      fontSize = sizes.bigTitle25;
      break;
    case 'title18':
      fontSize = sizes.title18;
      break;
    case 'desc':
      fontSize = sizes.desc11;
      break;
    default:
      fontSize = sizes.text13;
      break;
  }

  return (
    <Text
      text={text}
      font={font ?? fontFamilies.poppinsRegular}
      flex={flex}
      numberOfLine={numberOfLine}
      size={size ? size : fontSize}
      color={color ?? colors.dark}
      styles={[{}, styles]}
    />
  );
};

export default TextComponentOld;
