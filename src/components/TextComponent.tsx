import {Label} from '@bsdaoquang/rncomponent';
import React, {FC} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {colors, fontFamilies, sizes} from '../constants';

type TextType = 'bigTitle' | 'title' | 'text' | 'desc';

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
const TextComponent: FC<Props> = ({
  text,
  size,
  font,
  flex,
  numberOfLine,
  color,
  styles,
  type,
}) => {
  let fontSize: number = sizes.text;
  switch (type) {
    case 'bigTitle':
      fontSize = sizes.bigTitle;
      break;
    case 'title':
      fontSize = sizes.title;
      break;
    case 'desc':
      fontSize = sizes.desc;
      break;
    default:
      fontSize = sizes.text;
      break;
  }

  return (
    <Label
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

export default TextComponent;
