import React from 'react';
import {
  DimensionValue,
  Image as ImageCustom,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

interface Props {
  styles?: StyleProp<ImageStyle>;
  width?: DimensionValue;
  height?: DimensionValue;
  source: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
}

const Image = ({
  styles,
  width,
  height,
  source,
  resizeMode = 'cover',
}: Props) => {
  return (
    <ImageCustom
      resizeMode={resizeMode}
      source={source}
      style={[
        {
          width,
          height,
        },
        styles,
      ]}
    />
  );
};

export default Image;
