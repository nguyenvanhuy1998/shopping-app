import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Offer} from '../../../components';

type Props = {};

const OfferList = (props: Props) => {
  return (
    <FlatList
      horizontal
      data={[]}
      renderItem={({item}) => <Offer item={item} />}
    />
  );
};

export default OfferList;

const styles = StyleSheet.create({});
