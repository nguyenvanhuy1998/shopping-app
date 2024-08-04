import React from 'react';
import {Container} from '../../components';
import {colors} from '../../constants';
import {SearchHeader} from './components';

export interface FormSearch {
  search: string;
}
const HomeScreen = () => {
  const initialValues: FormSearch = {
    search: '',
  };
  return (
    <Container
      styleContainer={{
        backgroundColor: colors.white,
      }}>
      <SearchHeader initialValues={initialValues} />
    </Container>
  );
};

export default HomeScreen;
