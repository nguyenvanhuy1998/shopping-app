import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from '../../components';
import {collectionNames, colors} from '../../constants';
import {offersServices} from '../../services';
import {OfferList, SearchHeader} from './components';

export interface FormSearch {
  search: string;
}
const HomeScreen = () => {
  const initialValues: FormSearch = {
    search: '',
  };
  const {data: offers, isPending} = useQuery({
    queryKey: [`${collectionNames.offers}`],
    queryFn: () => offersServices.getOffers(),
  });
  console.log({offers});
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <SearchHeader initialValues={initialValues} />
      {isPending ? <ActivityIndicator /> : <OfferList offers={offers} />}
    </Container>
  );
};

export default HomeScreen;
