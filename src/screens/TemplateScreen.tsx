import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {Container} from '../components';
import {globalStyles} from '../styles';
import {colors} from '../constants';

const TemplateScreen = ({navigation}: any) => {
  return (
    <Container
      styleContainer={[
        {
          backgroundColor: colors.white,
        },
      ]}>
      <Text>TemplateScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('WelcomeScreen')}
      />
    </Container>
  );
};

export default TemplateScreen;

const styles = StyleSheet.create({});
