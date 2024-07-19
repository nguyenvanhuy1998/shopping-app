import React from 'react';
import {
  DimensionValue,
  Image,
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

const ImageComponent = ({
  styles,
  width,
  height,
  source,
  resizeMode = 'cover',
}: Props) => {
  return (
    <Image
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

export default ImageComponent;
