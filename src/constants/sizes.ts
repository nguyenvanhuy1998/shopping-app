import {Dimensions} from 'react-native';

interface Sizes {
  width: number;
  height: number;
  bigTitle: number;
  title: number;
  text: number;
  desc: number;
  icon: number;
}

const sizes: Sizes = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  bigTitle: 18,
  title: 16,
  text: 14,
  desc: 12,
  icon: 18,
};
export default sizes;
