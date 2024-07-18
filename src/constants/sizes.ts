import {Dimensions} from 'react-native';

interface Sizes {
  width: number;
  height: number;
  bigTitle25: number;
  bigTitle20: number;
  title18: number;
  title16: number;
  text14: number;
  text13: number;
  desc11: number;
  desc10: number;
  icon: number;
}

const sizes: Sizes = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  bigTitle25: 25,
  bigTitle20: 20,
  title18: 18,
  title16: 16,
  text14: 14,
  text13: 13,
  desc11: 11,
  desc10: 10,
  icon: 18,
};
export default sizes;
