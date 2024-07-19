import {ColorValue} from 'react-native';
import {colors, iconSizes} from '../constants';

export const getDimensionSizeRound = (
  sizeRound?:
    | 'extraLarge56'
    | 'extraLarge50'
    | 'large40'
    | 'medium35'
    | 'medium30'
    | 'small20',
) => {
  switch (sizeRound) {
    case 'extraLarge56':
      return iconSizes.extraLarge56;
    case 'extraLarge50':
      return iconSizes.extraLarge50;
    case 'large40':
      return iconSizes.large40;
    case 'medium35':
      return iconSizes.medium35;
    case 'medium30':
      return iconSizes.medium30;
    default:
      return iconSizes.small20;
  }
};

export const getBackgroundColor = (
  outline?: boolean,
  backgroundColor?: ColorValue,
) => {
  if (outline) {
    return colors.white;
  }
  return backgroundColor ? backgroundColor : colors.dark;
};
