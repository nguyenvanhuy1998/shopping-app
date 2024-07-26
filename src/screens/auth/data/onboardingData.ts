import {ImageSourcePropType} from 'react-native';
import {images} from '../../../constants';

export interface OnboardingProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  desc: string;
}
export const onboardingData: OnboardingProps[] = [
  {
    id: 1,
    image: images.slide01,
    title: '20% Discount New Arrival Product',
    desc: 'Publish up your selfies to make yourself more beautiful with this app',
  },
  {
    id: 2,
    image: images.slide02,
    title: 'Take Advantage Of The Offer Shopping',
    desc: 'Publish up your selfies to make yourself more beautiful with this app',
  },
  {
    id: 3,
    image: images.slide03,
    title: 'All Types Offers Within Your Reach',
    desc: 'Publish up your selfies to make yourself more beautiful with this app',
  },
];
