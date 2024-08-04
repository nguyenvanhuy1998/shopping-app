import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Offer} from '../../../components';
import {Offer as OfferModel} from '../../../models';
import {spacings} from '../../../constants';

type Props = {
  offers?: OfferModel[];
};

const OfferList = ({offers}: Props) => {
  const handleSelectOffer = (item: OfferModel) => {
    console.log(item);
  };
  return (
    <View>
      <FlatList
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        horizontal
        data={offers}
        renderItem={({item}) => (
          <Offer item={item} onPress={handleSelectOffer} />
        )}
      />
    </View>
  );
};

export default OfferList;

const styles = StyleSheet.create({
  contentContainer: {
    padding: spacings.space_16,
    gap: spacings.space_16,
  },
});
