import {Section} from '@bsdaoquang/rncomponent';
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Container, TextComponent} from '../../components';

const HomeScreen = () => {
  return (
    <Container
      isScroll={false}
      back
      title="Home Screen"
      right={<TextComponent text="Search" />}>
      <FlatList
        data={Array.from({length: 20})}
        renderItem={({item, index}) => (
          <Section key={`item${index}`}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              fugit dolores dicta aliquid quos iusto exercitationem temporibus
              voluptate quae veritatis. Eligendi veritatis ex quod error
              eveniet! Temporibus repudiandae quasi aliquam!
            </Text>
          </Section>
        )}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
