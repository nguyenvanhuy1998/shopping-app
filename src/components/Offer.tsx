import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Offer as OfferModel} from '../models';

type Props = {
  item: OfferModel;
};

const Offer = ({item}: Props) => {
  return (
    <View>
      <Text>Offer</Text>
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({});
