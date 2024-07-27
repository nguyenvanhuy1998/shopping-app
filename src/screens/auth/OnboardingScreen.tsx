import React from 'react';
import {FlatList, StyleSheet, ViewToken} from 'react-native';
import {Container, Section} from '../../components';
import {CustomButton, OnboardingItem, Pagination} from './components';
import {onboardingData, OnboardingProps} from './data';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {globalStyles} from '../../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../routers/AuthNavigator';

const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const animatedValue = useSharedValue(0);
  const flatListRef = useAnimatedRef<FlatList<OnboardingProps>>();
  const flatListIndex = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      animatedValue.value = e.contentOffset.x;
    },
  });
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };
  const handleNextScreen = () => {
    if (flatListIndex.value < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: flatListIndex.value + 1,
      });
    } else {
      navigation.navigate('WelcomeScreen');
    }
  };

  return (
    <Container isScrollView={false}>
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return <OnboardingItem item={item} index={index} />;
        }}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
      />
      <Section
        styles={[
          globalStyles.row,
          globalStyles.spaceBetween,
          styles.bottomContainer,
        ]}>
        <Pagination data={onboardingData} animatedValue={animatedValue} />
        <CustomButton
          onPress={handleNextScreen}
          dataLength={onboardingData.length}
          flatListIndex={flatListIndex}
        />
      </Section>
    </Container>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  bottomContainer: {},
});
