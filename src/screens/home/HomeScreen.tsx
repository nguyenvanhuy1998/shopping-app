import React from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {OfferList, SearchHeader} from './components';
import {useQuery} from '@tanstack/react-query';
import {offersServices} from '../../services';

export interface FormSearch {
  search: string;
}
const HomeScreen = () => {
  const initialValues: FormSearch = {
    search: '',
  };
  const {data} = useQuery({
    queryKey: ['offers'],
    queryFn: () => offersServices.getOffers(),
  });
  console.log({data});
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <SearchHeader initialValues={initialValues} />
      <OfferList />
    </Container>
  );
};

export default HomeScreen;
