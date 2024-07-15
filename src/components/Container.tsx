import React, {ReactNode} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {globalStyles} from '../styles';
import {Row} from '@bsdaoquang/rncomponent';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants';

type Props = {
  children: ReactNode;
  title?: string;
  back?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  isScroll?: boolean;
};

const Container = (props: Props) => {
  const {children, title, back, left, right, isScroll = true} = props;
  return (
    <SafeAreaView style={[globalStyles.container]}>
      {(back || left || title || right) && (
        <Row
          styles={{
            padding: 16,
            paddingTop:
              Platform.OS === 'android' ? StatusBar.currentHeight : 42,
          }}>
          {back && <TextComponent text="Back" />}
          {left && !back && <TextComponent text="Left" />}
          <View
            style={{
              paddingHorizontal: 16,
              flex: 1,
            }}>
            {title && (
              <TextComponent
                type="bigTitle"
                font={fontFamilies.poppinsMedium}
                text={title}
              />
            )}
          </View>
          {right && right}
        </Row>
      )}
      {isScroll ? (
        <ScrollView style={[globalStyles.container]}>{children}</ScrollView>
      ) : (
        <View style={[globalStyles.container]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({});
