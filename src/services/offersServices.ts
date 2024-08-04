import firestore from '@react-native-firebase/firestore';
import {collectionNames} from '../constants';
import {Offer} from '../models';
export const offersServices = {
  getOffers: async (): Promise<Offer[]> => {
    const currentTime = Date.now();
    try {
      const offersSnapshot = await firestore()
        .collection(collectionNames.offers)
        .get();
      const offers: any = offersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredOffers = offers.filter(
        ({startAt, endAt}: Offer) =>
          startAt <= currentTime && endAt >= currentTime,
      );
      return filteredOffers;
    } catch (error) {
      console.error('Error fetching offers:', error);
      throw new Error('Failed to fetch offers');
    }
  },
};
